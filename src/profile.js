import React from 'react';
import { Form, Icon, Image, Button, Divider, Header, Grid } from 'semantic-ui-react'
import MainNavBar from './MainNavBar';

class Profile extends React.Component {
    constructor(...props) {
        super(...props)
        this.state = {}

    }


    render() {
        return (<div>
            <MainNavBar></MainNavBar>
            <Divider horizontal>
                <Header as='h4'>
                    <Icon name='user' />
                    Edit User Profile
      </Header>
            </Divider>
            <Grid stackable  columns={2}>
          <Grid.Column width={7} >
            <Image className="imagwwali" src="https://i.ya-webdesign.com/images/male-avatar-png-7.png" circular bordered />
           <br />
            <center>
            <Button  icon labelPosition='left'>
        <Icon name='upload' />
        upload Image
      </Button>
      </center>
        </Grid.Column>
          <Grid.Column width={6} centerd >
        <Form className='attached fluid '>
        <Form.Input label='User Name' type='text'  />
      <Form.Input label='Contact No' type='text'  />
      <Header size='large'>Change Password:</Header>

      <Form.Group widths='equal'>
      <Form.Input label='Old Password'  type='text' />
      <Form.Input label='New Password'  type='text' />

     
      </Form.Group>
     
      
    </Form>
   
   
    <Button primary >Submit</Button>
    <Button color='teal' >Edit</Button>
   
    </Grid.Column>

        </Grid>
        </div>
        );
    }


}
export default Profile;
