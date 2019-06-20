import React from 'react';
import {  Link } from "react-router-dom";
import { Card, Image,Button, Icon } from 'semantic-ui-react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'semantic-ui-css/semantic.min.css';
import './MainActivity.css';
import FormExampleSubcomponentControl from './FilterComponent';
import MainNavBar from './MainNavBar';


const CardExampleCard = (props) => (
  <Card  raised color="green" className="BooksContainer">
  <Image  className="Bookimage" src={props.type.image} wrapped-ui={true}  centered />
    <Card.Content>
      <Card.Header>{props.type.name}</Card.Header>
      <Card.Meta>
        <span className=''>Available in  only <h4><Icon name="rupee sign" ></Icon> {props.type.price} /- </h4></span>
      </Card.Meta>
    
   <Link to="/bookdescription">
      <Button primary size='large' fluid  animated='vertical'>
        
      <Button.Content hidden>See Details</Button.Content>
      <Button.Content visible>
        <Icon name='shop' />
      </Button.Content>
    </Button>
    </Link>
      
    </Card.Content>
  
  </Card>
  
  
)


function ShowBooks(props){
  console.log("show Books");
  let  db=props.books;
  console.log(db);
 
  return ( <Card.Group itemsPerRow={4}> 
    {db.map((item) =>(

      <CardExampleCard type={item} />
     
    ))
    }
    </Card.Group>
  );
  }
  
  

function MainPage(props){
 return (
    <div>
        <div>
          <MainNavBar></MainNavBar>
        </div>

   
<div className="FilterClass">
<FormExampleSubcomponentControl></FormExampleSubcomponentControl>
  </div>
  
    <div> 
<ShowBooks books={props.books}></ShowBooks>   
</div>

         
    </div>
    
    )
}


export default MainPage;