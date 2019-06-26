import React from 'react';
import './sellitem.css';
import {  Button, Icon,Image,Grid,Form,Header ,Select,Divider} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import MainNavBar from './MainNavBar';
const BranchOptions=[
  {
  text: 'Computer Science Enginerring',
  value:"Computer Science Enginerring"
},
{key: 'Information Enginerring',
    text: 'Information Enginerring',
    value: 'Information Enginerring'
},
{key: 'Electronics and Communication Enginerring',
    text: 'Electronics and Communication Enginerring',
    value: 'Electronics and Communication Enginerring'
},
{key: 'Electrical Enginerring',
    text: 'Electrical Enginerring',
    value: 'Electrical Enginerring'
},
{key: 'Mechanical Enginerring',
    text: 'Mechanical Enginerring',
    value: 'Mechanical Enginerring'
},
{key: 'Civil Enginerring',
    text: 'Civil Enginerring',
    value: 'Civil Enginerring'
}

]

const SemesterOptions=[
    {key: 'First Semester',
    text: 'First Semester',
    value: 'First Semester'
  },
  {key: 'Second Semester',
  text: 'Second Semester',
  value: 'Second Semester'
},
{key: 'Third Semester',
text: 'Third Semester',
value: 'Third Semester'
},
{key: 'Fourth Semester',
text: 'Fourth Semester',
value: 'Fourth Semester'
},
{key: 'Fifth Semester',
text: 'Fifth Semester',
value: 'Fifth Semester'
},
{key: 'Sixth Semester',
text: 'Sixth Semester',
value: 'Sixth Semester'
},
{key: 'Seventh Semester',
text: 'Seventh Semester',
value: 'Seventh Semester'
},
{key: 'Eight Semester',
text: 'Eight Semester',
value: 'Eight Semester'
}
 
  
  ]

function EditBook({branch,semester,bookname,sellingprice,MRP,logout,username,handleChange,handleselect,savebook,getmybooks}) {
  
  return (
    <div>
      <div><MainNavBar  logout={logout} username={username} getmybooks={getmybooks}> </MainNavBar>
        </div>
        <Divider horizontal>
      <Header as='h4'>
        <Icon name='tag' />
        Edit Your Book
      </Header>
    </Divider>
        <div className="sellbook">
        <Grid stackable centered columns={2}>
          <Grid.Row>
          <Grid.Column width={8} >
        <Form className='attached fluid ' >
        <Form.Field control={Select} value={branch}  onChange={(e, { value }) => handleselect("branch",value)} required label='CHOOSE BRANCH' options={BranchOptions} placeholder=' Select Branch' />
        <br />
          <Form.Field control={Select} value={semester}  onChange={(e, { value }) => handleselect("semester",value)}  required label='CHOOSE SEMESTER' options={SemesterOptions} placeholder='Select Semester' /> 
          <br />
          <Form.Input name="bookname" value={bookname} onChange={handleChange} required label='BOOK NAME'  type='text' /> 
          <br />
          <Form.Input name="bookurl" onChange={handleChange}  required label='BOOK URL'  type='text' /> 
          <br />
          <Form.Group widths='equal'>
      <Form.Input label='SELLING PRICE' value={sellingprice} required  type='number' name="sellingprice" onChange={handleChange}   />
      <Form.Input label='MRP' value={MRP} type='number' name="MRP" onChange={handleChange}  />
      </Form.Group>
      <br />
      <Form.Checkbox inline  label='I agree to the terms and conditions ' required />
      
     

  
    
     
    </Form>
   
    
   
   
    </Grid.Column>
    <Grid.Column width={5} centered >
    <Image src="https://s4.scoopwhoop.com/anj/787440660.jpg" className="img1" rounded/>
    <Button icon labelPosition='left' >
        <Icon name='upload' />
        Upload Image
      </Button>
      </Grid.Column>
      </Grid.Row>
      </Grid>
      <Grid stackable centered>
      
      <Grid.Row>
     

     

      
      <Grid.Column width={8} >
        <Button  onClick={savebook}   size='big' fluid   primary>
     Submit Details

    </Button>
    </Grid.Column>
    <Grid.Column width={5} >

     
      </Grid.Column>
    </Grid.Row>
    </Grid>
   
   
    
        </div>
  </div>
  );
  }
  
  
  export default EditBook;