import React from 'react';
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";

import Banner from './Banner';

const Header = props => {
    return (
      <>
 
        <Menu>
    <Menu.Item>
    <Link to="/">Google Books</Link>
  
    </Menu.Item>

    <Menu.Item
    
    >
      <Link to="/">Search Books</Link>
    </Menu.Item>

    <Menu.Item
    
     
   
    >
 <Link to="/saved">Saved Books</Link>
    </Menu.Item>
  </Menu>

  <Banner/>
</>
   
    )
};



export { Header };