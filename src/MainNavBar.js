import React from 'react';
import { Button, Icon,Dropdown, Popup } from 'semantic-ui-react';
import { Navbar, Nav,Form,FormControl} from '../node_modules/react-bootstrap';
import {  Link } from "react-router-dom";

class MainNavBar extends React.Component{
    render(){
        return (
   <div>
        <Navbar bg="dark" variant="dark" expand="lg" >
 <Link to="/books/all">
  <Navbar.Brand href="">
  <img
        alt=""
        src="https://upload.wikimedia.org/wikipedia/commons/4/42/OLX_New_Logo.png"
        width="65"
        height="30"
        className="d-inline-block align-top"
      />
     {'Mini Olx'}
  </Navbar.Brand>
  </Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
    <Nav.Link href="" >
        <Link to="/sellbook">
    <Button icon labelPosition='left' >
    
      <Icon name='book' fluid />
       Sell Books
    </Button>
    </Link>
    </Nav.Link>
    <Nav.Link href="">
   

  
 <Popup content='Add users to your feed' trigger={<Button icon='bell' / >} />
 </Nav.Link>
  
   <Nav.Link href="">

    <Dropdown  text="User   ▼" icon='user'  labeled button className='icon' direction='left' >
    <Dropdown.Menu>
   
      <Dropdown.Item > <Link to="/mybooks"> <Icon name="book" ></Icon>  My Books</Link> </Dropdown.Item>
      <Dropdown.Item >  <Link to="/profile"> <Icon name="edit" ></Icon> Personel Info</Link> </Dropdown.Item>
      <Dropdown.Divider />
     
      
      <Dropdown.Item > <Link to="/"><Icon name="log out" ></Icon>  Log out </Link></Dropdown.Item>
     
    
    </Dropdown.Menu>
  </Dropdown> 
  </Nav.Link>
  </Nav>

  </Navbar.Collapse>

</Navbar>
</div>
        );
    }
}
export default MainNavBar