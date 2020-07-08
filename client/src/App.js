import React ,{useState} from 'react';

import Home from './components/Home';
import Saved from './components/Saved'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';
import Layout from './components/Layout';
import ReactSnackBar from "react-js-snackbar";



function App() {

const [state, setstate] = useState({books:[],Show:false,message:""})

  let booksearch=(search)=>{
  

    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`).then(data=>{
      console.log(data.data);
      
    setstate({books:data.data.items});


    })


    





  }



  // saving the book in mongo database

  let savebook=(book)=>{

 


    axios.post('http://localhost:4000/api/savebook', book)
    .then(function (response) {
      setstate({Show:true,message:"Book Saved",...state});
      setTimeout(() => {
        setstate({ ...state,Show:false });
      }, 2000);
     
    })




  }


  let deletePrompt=()=>{

    setstate({ ...state,Show:true,message:"Book Deleted" });
    setTimeout(() => {
      setstate({ ...state,Show:false });
    }, 2000);

  }

  // getting all books in the saved books


 




  return (
    <Router>

      <Layout>

      <ReactSnackBar Icon={<span>🦄</span>} Show={state.Show}>
         {state.message}
        </ReactSnackBar>
      <Switch>
 
 <Route exact path="/"  component={() => <Home books={state.books}   savebook={savebook} search={booksearch}/>} />
 
 <Route exact path="/saved"  component={() => <Saved deletePrompt={deletePrompt}/>}  />


</Switch>




 

      </Layout>
    



  
     


    </Router>
    
  );
}

export default App;
