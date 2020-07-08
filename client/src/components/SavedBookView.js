import React from 'react';
import { Grid, Image,Button } from 'semantic-ui-react';

export default function SavedBookView({matter,deletebook}) {
    return (
        <Grid divided='vertically'>
        <Grid.Row columns={3}>
 <Grid.Column>
 <Image  src={matter.image} size='small' verticalAlign='middle' />{' '}

 </Grid.Column>
 <Grid.Column>
<h3>{matter.description}</h3> 
 </Grid.Column>
 <Grid.Column>
 <Button primary onClick={()=>deletebook(matter._id)} >Delete</Button>
 </Grid.Column>
</Grid.Row>
       </Grid>
    )
}
