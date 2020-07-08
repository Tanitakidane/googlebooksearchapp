const mongoose = require('mongoose');
// schema maps to a collection
const Schema = mongoose.Schema;


const storedbooksSchema=new Schema({


    date:{
        type:Date,
        default: Date.now
    },
    image:String, 
    description:String




});

module.exports = mongoose.model('storedbooks', storedbooksSchema);