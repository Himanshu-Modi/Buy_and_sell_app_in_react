const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const cors=require('cors');


mongoose.connect('mongodb://localhost:27017/Buyandsell', {useNewUrlParser: true},function(error){
  //console.log(error);
});

const server = express();
server.use(cors());
server.use(bodyParser.json());   // for JSON data body
server.use(bodyParser.urlencoded({ extended: false }))  // for urlencoded data body

const UserSchema = new Schema({
    name:  String,
    phone: String, 
    email:String

  });
  
const BookSchema = new Schema({
    branch:  String,
    semester: String,
    bookname:String,
    bookurl:String,
    sellingprice:Number,
    MRP:Number,
    uid:String
  });



const User = mongoose.model('Users', UserSchema);
const Book = mongoose.model('Books', BookSchema);


server.post("/user",function(req,res){
  console.log(req.body);

    User.findOne({email:req.body.email},function(err,doc){
    if(doc){
      res.send(doc);
    }
    else{
      
      let user = new User();
      user.name = req.body.name;
      user.email = req.body.email;
      user.phone = req.body.phone;
      user.save();
     res.send(user);
     
    }
})


})
    



server.get('/seller/:id',function(req,res){
  User.findOne({_id:req.params.id},function(err,docs){
    res.json(docs);
  })
})

server.get('/mybooks/:id',function(req,res){
  Book.find({uid:req.params.id},function(err,docs){
    res.json(docs);
  })
})

server.put("/updateuser",function(req,res){
  
  User.findOneAndUpdate({email:req.body.email},{$set:{name:req.body.name,phone:req.body.phone}},function(err,doc){
      console.log(doc)  // this will contain db object
  })
})


server.post("/savebook",function(req,res){
  let book = new Book();
  book.branch = req.body.branch;
  book.semester = req.body.semester;
  book.bookname = req.body.bookname;
  book.bookurl=req.body.bookurl;
  book.sellingprice=req.body.sellingprice;
  book.MRP=req.body.MRP;
  book.uid=req.body.uid;
  book.save();
 res.send(book);

})


server.get('/book',function(req,res){
  Book.find({},function(err,docs){
    res.json(docs);
  })
})


server.delete('/book/:id',function(req,res){
Book.remove({_id:req.params.id},function(err){
})
})

server.post('/bookfind',function(req,res){
  if(req.body.branch==null){ 
    Book.find({semester:req.body.semester},function(err,docs){
    console.log(docs);
    res.json(docs);

  })
}
 else if(req.body.semester==null){ 
    Book.find({branch:req.body.branch},function(err,docs){
    console.log(docs);
    res.json(docs);

  })
}
  else{
  Book.find({branch:req.body.branch,semester:req.body.semester},function(err,docs){
    console.log(docs);
    res.json(docs);
  })
}
})



server.listen(8080,function(){
    console.log("server started")
})
