import React from 'react';
import './App.css';

import MainNavBar from './MainNavBar';
import './Bookdescription.css';
import { Image } from '../node_modules/react-bootstrap';
import {  Button, Icon,Header,Grid,Form,Divider,Table} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { SSL_OP_MSIE_SSLV2_RSA_PADDING } from 'constants';

function Bookdescription(props){
  console.log(props);
  

  let book = props.books.find( (book)=>book._id==props.match.params.id)
  

return (
  <div>
      
      <MainNavBar username={props.username} logout={props.logout} ></MainNavBar>
      <div></div>
      <Divider horizontal>
      <Header as='h1'>
        <Icon name='bar chart' />
        Specifications
      </Header>
    </Divider>

      <div>

        <Grid stackable  columns={2}>
          <Grid.Column width={7} >
            <Image className="imagwwali" src={book.bookurl} />
        </Grid.Column>
          <Grid.Column width={6} centerd >
        <Form className='attached fluid '>
        <Form.Input label='Branch' value={book.branch} type='text'  />
      <Form.Input label='Semester' type='text' value={book.semester} />
      <Form.Input label='Book' value={book.bookname} type='text' />
      <Form.Group widths='equal'>
      <Form.Input label='PRICE' value={book.sellingprice} type='text' />
      <Form.Input label='MRP' value={book.MRP} type='text' />

     
      </Form.Group>
      <Header as='h2'>Seller Information</Header>
      
    </Form>
    <Table definition>
      <Table.Body>
        <Table.Row>
          <Table.Cell width={4}>Seller Name</Table.Cell>
          <Table.Cell>{props.sellername}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Contact No</Table.Cell>
          <Table.Cell>{props.sellerphone}</Table.Cell>
        </Table.Row>
      
      
      </Table.Body>
    </Table>
    
    <Button  fluid primary>
      <Button.Content visible > Interested to Buy <Icon name='shop' /></Button.Content>

    </Button>
   
    </Grid.Column>

        </Grid>

 </div>
  
  </div>
);
}


export default Bookdescription;
