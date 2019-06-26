import React from 'react';
import { Navbar, Nav,Form,Button,ButtonGroup,Carousel,Modal,Row,Col} from '../node_modules/react-bootstrap';
import {List,Grid,Header,Segment,Container} from 'semantic-ui-react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import {  Link } from "react-router-dom";
function Home({model1show,showlogin,model2show,showsignup,googleLogin,handleChange,signup,signin}) {
  return(
    <div>
    <Navbar bg="dark" variant="dark">
     <Navbar.Brand href="#home">
      <img
        alt=""
        src="https://upload.wikimedia.org/wikipedia/commons/4/42/OLX_New_Logo.png"
        width="65"
        height="40"
        className="d-inline-block align-top"
      />
     {'Mini Olx'}
    </Navbar.Brand>
    <Nav className="ml-auto">
    <ButtonGroup className="mr-3" aria-label="Second group">
    <Button
          variant="success"
          onClick={()=>{showlogin()}} 
        >
         
          Login 
       

        </Button>

        <Modal
        show={model1show}
        onHide={showlogin}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
            <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address  </Form.Label>
    <Form.Control  onChange={handleChange} name="email" type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onChange={handleChange} name="password" type="password" placeholder="Password" />
  </Form.Group>
 
  <Button variant="primary"  onClick={()=>{signin()}}>
  
    Submit
   
  </Button>

  <br />
  <br />
  <Button variant="warning" onClick={googleLogin} >Login With Google</Button>
</Form>
        </Modal.Body>
      </Modal>


   
  </ButtonGroup>

   
  <Button 
          variant="info"
          onClick={()=>{showsignup()}} 
        >
          Sign Up
        </Button>

        <Modal
        show={model2show}
        onHide={showsignup}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
       <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Sign Up
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>

  <Form.Group controlId="formBasicEmail">
    <Form.Label >User Name</Form.Label>
    <Form.Control onChange={handleChange} name="name" type="text" placeholder="Enter Name" />
  </Form.Group>

  
  <Form.Group controlId="formBasicEmail">
    <Form.Label >Email address</Form.Label>
    <Form.Control onChange={handleChange} name="email" type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label >Password</Form.Label>
    <Form.Control onChange={handleChange} name="password" type="password" placeholder="Password" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label >Phone number</Form.Label>
    <Form.Control onChange={handleChange}type="text" name="phone" placeholder="Password" />
  </Form.Group>
  </Form>
  <Button  onClick={()=>{signup()}}  variant="primary" >
    Submit
  </Button>

        </Modal.Body>
      </Modal>

    
      
    </Nav>
  </Navbar>
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      height="570"
      alt="First slide"
      src="https://www.rd.com/wp-content/uploads/2017/11/How-Much-Does-a-Book-Need-to-Sell-to-Be-a-Bestseller-509582812-Billion-Photos-760x506.jpg"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      alt="Second slide"
      height="570"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE9n5FIWqInlAli85tZhI3Q_LDhXgnEqSjbQOutt8JTO_-IZpi"
    
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      alt="Third slide"
      height="570"
      src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/books/042019/XCM_Manual1168081_1500x300_1_1555490143.jpg"
    />

  </Carousel.Item>
</Carousel>
<Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Religious Ceremonies</List.Item>
                <List.Item as='a'>Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Banana Pre-Order</List.Item>
                <List.Item as='a'>DNA FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>

  </div>

  );
  }


export default Home;
