import React from 'react';
import {  Link } from "react-router-dom";
import { Card, Image,Button, Icon } from 'semantic-ui-react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'semantic-ui-css/semantic.min.css';
import './MainActivity.css';
import FormExampleSubcomponentControl from './FilterComponent';
import MainNavBar from './MainNavBar';
import Bookdescription from './bookdescription';


function CardExampleCard(props){


return  (
  <Card  raised color="green" className="BooksContainer">
  <Image  className="Bookimage" src={props.type.bookurl} wrapped-ui={true}  centered />
    <Card.Content>
      <Card.Header>{props.type.bookname}</Card.Header>
      <Card.Meta>
        <span className=''>Available in  only <h4><Icon name="rupee sign" ></Icon> {props.type.sellingprice} /- </h4></span>
      </Card.Meta>
    
      
      <Button onClick={()=>{props.getseller(props.type.uid,props.type._id)}} primary size='large' fluid  animated='vertical'>
        
      <Button.Content hidden>See Details</Button.Content>
      <Button.Content visible>
        <Icon name='shop' />
      </Button.Content>
    </Button>
   
      
    </Card.Content>
  
  </Card>
  
  
)
}

function ShowBooks(props){
  console.log("show Books");
  let  db=props.books;
  console.log(db);
 
  return ( <Card.Group itemsPerRow={4}> 
    {db.map((item) =>(

      <CardExampleCard type={item} getseller={props.getseller}  />
     
    ))
    }
    </Card.Group>
  );
  }
  
  

function MainPage({logout,username,getseller,books,bookdescription,handleselect,bookfilter,uid}){
 
 return (
    <div>
        <div>
          <MainNavBar logout={logout} username={username}></MainNavBar>
        </div>

   
<div className="FilterClass">
<FormExampleSubcomponentControl handleselect={handleselect} bookfilter={bookfilter}></FormExampleSubcomponentControl>
  </div>
  
    <div> 
<ShowBooks books={books} bookdescription={bookdescription} getseller={getseller} ></ShowBooks>   
</div>

         
    </div>
    
    )
}


export default MainPage;