import React from 'react';
import { BrowserRouter as Router,Link, Route } from "react-router-dom";
import { Navbar, Nav,Form,Button,ButtonGroup,Carousel,Modal,Row,Col} from '../node_modules/react-bootstrap';
import './App.css';
import Home from './Home';
import MainPage from "./MainActivity";
import SellBook from './SellBook';
import * as firebase from "firebase/app";
import "firebase/auth";

import Bookdescription from './bookdescription';
import MyBooks from './MyBooks'
import Profile from './profile'
import axios from '../node_modules/axios';

var firebaseConfig = {
  apiKey: "AIzaSyCOeBYQ32N2_qssk71Ez7eNEcYfc8YfQwc",
  authDomain: "bookseller-8641b.firebaseapp.com",
  databaseURL: "https://bookseller-8641b.firebaseio.com",
  projectId: "bookseller-8641b",
  storageBucket: "bookseller-8641b.appspot.com",
  messagingSenderId: "461224983369",
  appId: "1:461224983369:web:2f77f9d72ce29243"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



class App extends React.Component{
  constructor(props){
    super(props)
     this.state= {model1show:false,model2show:false}
     this.state.db = {
     books:[],
     user:{email:"",password:""}
     }    

  }
  
  showlogin(){
    console.log("show hua h");
    this.setState(
      {
        model1show:true
      }
  
    )
  }


dontshowlogin(){
  this.setState(
    {
      model1show:false
    }

  )
}
showsignup(){
  console.log("show hua h");
  this.setState(
    {
      model2show:true
    }

  )
}
dontshowsignup(){
  this.setState(
    {
      model2show:false
    }

  )
}


handleemailChange(event){
  let user=user;
  user.email=event.target.value;
  this.setState({
    user:user
  })
}

handlepasswordChange(event){
    let user=user;
    user.password=event.target.value;
    this.setState({
      user:user
    })

}

signup(){
firebase.auth().createUserWithEmailAndPassword(this.state.user.email,this.state.user.password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
}

googleLogin(){
  var provider = new firebase.auth.GoogleAuthProvider();
  console.log(provider);

  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user.displayName,user.email);
    // ...
  }).catch(function(error) {
    console.log(error);
    // Handle Errors here.
    var errorCode = error.code;
   
    var errorMessage = error.message;
   
    // The email of the user's account used.
    var email = error.email;


    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}

  componentDidMount(){
  
    axios.get('http://5cfe5a23cas949b00148d3ff2.mockapi.io/products')
    .then((res)=>{
      
    let db = this.state.db;
    db.books = res.data;
      this.setState({
         db:db
      })
    })

}

 render(){
    return (<div>
       <Router>
          <Route path="/" exact render={()=><Home model1show={this.state.model1show} showlogin={this.showlogin.bind(this)} dontshowlogin={this.dontshowlogin.bind(this)}  model2show={this.state.model2show} showsignup={this.showsignup.bind(this)} dontshowsignup={this.dontshowsignup.bind(this)} googleLogin={this.googleLogin.bind(this)} handleemailChange={this.handleemailChange.bind(this)}></Home>} />
          <Route path="/books/all" exact render={()=><MainPage books={this.state.db.books}></MainPage>} />
          <Route path="/sellbook" component={SellBook} />
          <Route path="/profile" component={Profile} />
          <Route path="/bookdescription" component={Bookdescription} />
          <Route path="/mybooks" component={MyBooks} />
       </Router>
       </div>
       );
  }
 
 

}
export default App;
