import React,{useState,useEffect} from 'react';
import { Grid} from 'semantic-ui-react';
import SavedBookView from './SavedBookView';
import axios from 'axios';

export default function Saved(props) {



    const [state, setstate] = useState({books:[]})


       //useEffect
       useEffect(() => {

        axios.post('http://localhost:4000/api/getbooks', {})
        .then(function (response) {
            setstate({books:response.data.data})
     
        })
    
       
    },[]);


    let deletebook=(id)=>{

        axios.post('http://localhost:4000/api/deletebook', {id:id})
        .then(function (response) {
           // setstate({books:response.data.data});

           props.deletePrompt();
     
        })




    }
   

    return (
       <Grid>
            <Grid.Column width={16}>
         

         {state.books.length>0? state.books.map((ele,id)=>(

          <SavedBookView key={id} deletebook={deletebook} matter={ele} />

         )):"No Book Saved ..."}
     
    
         
       </Grid.Column>
       </Grid>
    )
}
