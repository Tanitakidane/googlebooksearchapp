import React ,{useState, useEffect} from 'react'

import { Grid, Image,Button } from 'semantic-ui-react'

export default function SingleBookView({matter,savebook}) {


  const [state, setstate] = useState({image:"",description:""});


    //useEffect
    useEffect(() => {
      setstate({image:matter.volumeInfo.imageLinks.thumbnail,description:matter.volumeInfo.description})
  },[]);
 
    return (
        <Grid divided='vertically'>
             <Grid.Row columns={3}>
      <Grid.Column>
      <Image  src={state.image} size='small' verticalAlign='middle' />{' '}

      </Grid.Column>
      <Grid.Column>
    <h3>{state.description}</h3> 
      </Grid.Column>
      <Grid.Column>
      <Button primary onClick={()=>savebook(state)} >Save</Button>
      </Grid.Column>
    </Grid.Row>
            </Grid>
        
        
    )
}
