import React from 'react';
import { BrowserRouter as Router,Link, Route,withRouter } from "react-router-dom";
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
     this.state= {model1show:false,model2show:false,name:"",email:"",password:"",phone:"",uid:"",bookname:"",branch:"",semester:"",sellingprice:0,MRP:0,bookurl:"",sellername:"",sellerphone:"",sellerid:"",filterbranch:"",filtersemester:""}
     this.state.db = {
     books:[],   
     }    

  }
  
  showlogin(){
    let model1show=this.state.model1show;
    model1show=!model1show;
    this.setState(
      {
        model1show:model1show
      }
  
    )
  }




showsignup(){
  let model2show=this.state.model2show;
  model2show=!model2show;
  this.setState(
    {
      model2show:model2show
    }

  )
}




handleChange(evt){ 
 this.setState({ [evt.target.name]: evt.target.value });
}

handleselect(type,value){
if (type=="branch"){
    this.setState({
      branch:value
    })
  }
  if (type=="semester"){
    this.setState(
      {
        semester:value
      }
    )
  }
  if(type=="filterbranch"){
    
    this.setState({
      filterbranch:value
    })
  }
  if (type=="filtersemester"){
this.setState({
  filtersemester:value
})

  }
  



  }
  


handlephoneChange(evt){
  var len= evt.target.value.length;
  if (len<=10){
  
   this.setState({
    phone:evt.target.value
  })
}
  
}

fileUpload(e){
  console.log(e.target.files[0])
 let fd = new FormData()
 fd.append("avatar",e.target.files[0])

  axios.post("http://localhost:8080/image",fd,{headers:{
   'Content-Type': "multipart/form-data"
 }})
 }



checkuser=()=>{
  firebase.auth().onAuthStateChanged((user) =>{
    if (user) {
       var email=user.email;
      this.setState({
        email:email
      })
      this.storeuserdata();
      this.books();
    
     this.props.history.push('/books/all'); 


    } else {
      // No user is signed in.
     
      this.props.history.push("/");
    }

  });
  
}

logout=()=>{
 
  firebase.auth().signOut().then(()=> {
  this.props.history.push("/");
  }).catch(function(error) {
  // An error happened.
  });
}


signup(){  
  firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then(()=> {
  
    }).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  
  // ...
});
}

signin(){
 
  firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((result)=> {
    // This gives you a Google Access Token. You can use it to access the Google API.
  
    this.props.history.push('/books/all');
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    console.log(errorCode);
    
    var errorMessage = error.message;
    // ...
  });
}

storeuserdata=()=>{
let obj={name:this.state.name,email:this.state.email,phone:this.state.phone};
axios.post('http://localhost:8080/user',obj)
.then((res)=>{
  this.setState(
    {
      name:res.data.name,
      email:res.data.email,
      uid:res.data._id,
      phone:res.data.phone
    }
  )
})
}


getseller=(uid,sid)=>{
  console.log(uid);
  axios.get("http://localhost:8080/seller/"+uid).then(
    (res)=>{
     
    
      this.setState({
        sellername:res.data.name,
        sellerphone:res.data.phone

      })

   
      this.props.history.push("/bookdescription/"+sid);

    }
    
  )


}

savebook=()=>{
  let obj={branch:this.state.branch,semester:this.state.semester,bookname:this.state.bookname,bookurl:this.state.bookurl,sellingprice:this.state.sellingprice,MRP:this.state.MRP,uid:this.state.uid};
axios.post("http://localhost:8080/savebook",obj).then((res)=>{
  this.books();
  this.props.history.push("/books/all")
})

}


updateuser=()=>{
  let obj={uid:this.state.uid,name:this.state.name,email:this.state.email,phone:this.state.phone};
  axios.put('http://localhost:8080/updateuser',obj).then((res=>{console.log(res)}))

}

googleLogin=()=>{
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then((result)=> {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var user = result.user;
    this.setState({
      name:user.displayName
    })
    this.setState({
      email:user.email
    })
  

    this.props.history.push('/books/all');
   
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

bookfilter=()=>{

  let obj={branch:this.state.filterbranch,semester:this.state.filtersemester};
  console.log(obj);
  axios.post("http://localhost:8080/bookfind",obj).then((res)=>{
    
  let db = this.state.db;
  db.books = res.data;
  console.log(res.data);
    this.setState({
       db:db
    })
  })
  
}

books=()=>{
  axios.get('http://localhost:8080/book')
  .then((res)=>{
    
  let db = this.state.db;
  db.books = res.data;
  console.log(res.data);
    this.setState({
       db:db
    })
  })
 
}

  componentDidMount(){
    this.checkuser();   

}



 render(){

    return (<div>
     
          <Route path="/" exact render={()=><Home model1show={this.state.model1show} showlogin={this.showlogin.bind(this)}   model2show={this.state.model2show} showsignup={this.showsignup.bind(this)} googleLogin={this.googleLogin}  handleChange={this.handleChange.bind(this)}  signup={this.signup.bind(this)} signin={this.signin.bind(this)} ></Home>} />
          <Route path="/books/all" exact render={()=><MainPage logout ={this.logout}  uid={this.state.uid}  username={this.state.name} getseller={this.getseller}   books={this.state.db.books} bookdescription={this.bookdescription}  handleselect={this.handleselect.bind(this)} bookfilter={this.bookfilter} ></MainPage>} />
          <Route path="/sellbook" exact render={()=><SellBook    logout ={this.logout} uid={this.state.uid}  username={this.state.name} handleChange={this.handleChange.bind(this)}  handleselect={this.handleselect.bind(this)} savebook={this.savebook} ></SellBook> }/>
          <Route path="/profile"  exact render={()=><Profile   logout ={this.logout} uid={this.state.uid}  username={this.state.name} phone={this.state.phone} handleChange={this.handleChange.bind(this)}   handlephoneChange={this.handlephoneChange.bind(this)} updateuser={this.updateuser} ></Profile> } />
          <Route path="/bookdescription/:id" exact render={(props)=><Bookdescription  {...props}  logout ={this.logout} uid={this.state.uid}  username={this.state.name}   books={this.state.db.books} sellername={this.state.sellername} sellerphone={this.state.sellerphone} ></Bookdescription> }/>
          <Route path="/mybooks/:id" exact render={()=><MyBooks   logout ={this.logout} uid={this.state.uid}  username={this.state.name} ></MyBooks> }/>
       
       </div>
       );
    }
 
 

}
export default withRouter(App);
