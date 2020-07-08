import React ,{useState} from 'react'
import { Grid} from 'semantic-ui-react'

import { Input,Button } from 'semantic-ui-react'
import SingleBookView from './SingleBookView'


export default function Home(props) {
  
  const [state, setstate] = useState("");


let changeValue=(event)=>{


setstate(event.target.value);


}


    return (

        <Grid>
        <Grid.Column width={16}>
        <Input placeholder="Search Books......" style={{width: "670px"}} onChange={(event)=>changeValue(event)}/>

        <Button   size='medium' basic color='olive' onClick={()=>props.search(state)} style={{marginLeft: "20px"}}>
        Search
    </Button>
    
          
        </Grid.Column>

        <Grid.Column width={16}>
         

          {props.books.length>0? props.books.map((ele,id)=>(

           <SingleBookView key={id} matter={ele} savebook={props.savebook}/>

          )):"Enter Your Search And Click ..."}
      
     
          
        </Grid.Column>
      
      </Grid>
    )
}
