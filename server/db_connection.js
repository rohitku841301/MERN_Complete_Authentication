const mongoose = require('mongoose');

 mongoose.connect('mongodb://localhost:27017/mern',{useNewUrlParser:true},(err,res)=>{
    if(err){
        console.log(err);
    }else{
        console.log('db connected');
    }
});

