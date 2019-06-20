import React from 'react';
import './App.css';

import MainNavBar from './MainNavBar';
import './Bookdescription.css';
import { Image } from '../node_modules/react-bootstrap';
import {  Button, Icon,Header,Grid,Form,Divider,Table} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Bookdescription extends React.Component{



render(){
return (
  <div>
      <div>
      <MainNavBar />
      </div>
      <Divider horizontal>
      <Header as='h1'>
        <Icon name='bar chart' />
        Specifications
      </Header>
    </Divider>

      <div>

        <Grid stackable  columns={2}>
          <Grid.Column width={7} >
            <Image className="imagwwali" src="https://m.media-amazon.com/images/I/51FCVJwiGfL._AC_UL436_.jpg"  />
        </Grid.Column>
          <Grid.Column width={6} centerd >
        <Form className='attached fluid '>
        <Form.Input label='Branch' value='Computer Science Engineering' type='text'  />
      <Form.Input label='Semester' type='text' value="Sixth Semester" />
      <Form.Input label='Book' value='Operating System' type='text' />
      <Form.Group widths='equal'>
      <Form.Input label='PRICE' value='250' type='text' />
      <Form.Input label='MRP' value='500' type='text' />

     
      </Form.Group>
      <Header as='h2'>Seller Information</Header>
      
    </Form>
    <Table definition>
      <Table.Body>
        <Table.Row>
          <Table.Cell width={4}>Seller Name</Table.Cell>
          <Table.Cell>Subhash Singh</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Contact No</Table.Cell>
          <Table.Cell>9898989898</Table.Cell>
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

}
export default Bookdescription;
