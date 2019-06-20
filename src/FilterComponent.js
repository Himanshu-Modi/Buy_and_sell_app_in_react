import React from 'react';
import { Form ,Icon} from 'semantic-ui-react'

class FormExampleSubcomponentControl extends React.Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
  
    return (
      <Form >
        <Form.Group>
       
          <Form.Select fluid options={BranchOptions} placeholder='Select Branch' width={7} />
          <Form.Select fluid  options={SemesterOptions} placeholder='Select Semester' width={7}/>
           <Form.Button color={"blue"} width={3} fluid >  <Icon name='search' fluid  />Search</Form.Button>
        </Form.Group>
    </Form>); 
  }
}
const BranchOptions=[
  {key: 'Computer Science Enginerring',
  text: 'Computer Science Enginerring',
  value: 'Computer Science Enginerring'
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


export default FormExampleSubcomponentControl;