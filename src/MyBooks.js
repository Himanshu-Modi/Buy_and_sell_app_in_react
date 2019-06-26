import React from 'react';
import { Card, Image,Button, Icon,Header,Popup } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import MainNavBar from './MainNavBar';
import './MyBooks.css';




 

function MyBooks({logout,username,getmybooks,mybooks,deletebook,editbook}){ 
  console.log(mybooks);
  
return  (
  <div className="MyBooksbg">
  <MainNavBar logout={logout} username={username} getmybooks={getmybooks}></MainNavBar>
<div>
  <div className="mainHeading">
  <center>
  <Header as='h2'>
    <Image src="https://i0.wp.com/www.teamalignment.co/wp-content/uploads/2017/10/Team-Alignment-Book-Icon.png?fit=300%2C274&ssl=1" />
    <div className="myBooksHeading">
    My Books
    </div>

  </Header>
  </center>
</div>

  <Card.Group itemsPerRow={4}> 
    {mybooks.map((item) =>(
       <Card   color="green" className="BooksContainer" centered>

       <div style={{backgroundColor:"black" }}>
       <Popup content='Delete Book' position='right bottom' trigger={<Button circular color='red' icon='delete calendar' onClick={()=>{deletebook(item._id)}}  floated="right" />} />
       <Popup content='Edit Book Details' position='right bottom' trigger={<Button circular color='yellow' icon='edit outline'onClick={()=>{editbook(item._id)}}  floated="right"/>} />
       
       </div>
  
     
       
     
     <Card.Content>
     
       <Image  className="Bookimage" src={item.bookurl} wrapped-ui={false}  centered />
  
       
        
      
       
        
          <Card.Header>{item.bookname}</Card.Header>
          <Card.Meta>
            <span className=''>Available in  only <h4><Icon name="rupee sign" ></Icon> {item.sellingprice} </h4></span>
          </Card.Meta>
        
       <Link to="/mybooks/edit">
          <Button  size='large' fluid positive >
            Sold Out
            
        </Button>
        </Link>
          
        </Card.Content>
      
      </Card>
      
  
    ))
    }
    </Card.Group>
 

  
 

 
    </div>
    </div>
  
  
    
   
  )
}

  export default MyBooks;