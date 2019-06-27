const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const cors=require('cors');
var multer  = require('multer');
const path=require('path');

var fs = require('fs');

const storageEngine=multer.diskStorage({
destination:'./uploads',
filename:function(req,file,fn){
  fn(null,new Date().getTime().toString()+'-'+file.fieldname+path.extname(file.originalname));
}

})
const upload = multer({ storage:storageEngine });


mongoose.connect('mongodb://localhost:27017/Buyandsell', {useNewUrlParser: true},function(error){
  //console.log(error);
});

const server = express();
server.use(cors());
server.use(bodyParser.json());   // for JSON data body
server.use(bodyParser.urlencoded({ extended: false }))  // for urlencoded data body
server.use(express.static('uploads'));

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

server.post('/image', upload.single('avatar'), function (req, res, next) {
  // req.file is the `avatar` file
  console.log(req.file)
  // req.body will hold the text fields, if there were any
  res.json(req.file)

})


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


server.post("/bookedit",function(req,res){
  console.log(req.body.bookurl);
Book.update({_id:req.body.bid},{$set:{branch:req.body.branch,semester:req.body.semester,sellingprice:req.body.sellingprice,bookname:req.body.bookname,MRP:req.body.MRP,bookurl:req.body.bookurl}},{multi:true},function(err,doc){
console.log(err);
console.log(doc);
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
