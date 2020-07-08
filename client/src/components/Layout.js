import React from 'react'
import { Container } from 'semantic-ui-react'
import { Header } from './partials/Header';
export default function Layout(props) {
    return (
        <Container>
   
    


<Header/>
{ props.children } 
</Container>
    )
}
