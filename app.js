const express=require("express");
const app=express();
const mongoose=require("mongoose");
const storedbook=require("./models/storedbooks");
var cors = require('cors')
mongoose.connect("mongodb+srv://logan:logan123@cluster0-xtevk.mongodb.net/googlebooks?retryWrites=true&w=majority",{ useUnifiedTopology: true, useNewUrlParser: true  })
  .then(() => {
  console.log("Mongodb Connected");
  }).catch(err => console.log("Mongoose Connection Error",err));

  app.use(cors());
  app.use(express.json());
app.use(express.urlencoded({ extended: true }));



let port=process.env.PORT || 4000
  if(process.env.NODE_ENV==="production")
  {
   
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });

  }


  app.post("/api/savebook",async(req,res)=>{

   let description=req.body.description;

   let image=req.body.image;

   let book=new storedbook({
     image:image,
     description:description
   })


   let _savedbook=await book.save();


   res.json({data:_savedbook,message:"SuccessFully Saved"}).status(200);




  })



  app.post("/api/getbooks",async(req,res)=>{



    let books=await storedbook.find({});
    res.json({data:books}).status(200);



  })



  app.post("/api/deletebook",async(req,res)=>{



    await storedbook.deleteOne({_id:req.body.id});
    let books=await storedbook.find({});
    res.json({data:books}).status(200);



  })



app.listen(port ,()=>{
    console.log("Api Server Started",port);
})