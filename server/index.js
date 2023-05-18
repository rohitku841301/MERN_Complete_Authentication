const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const port = 5000;

const app = express();


require('./db_connection');
const userRouter = require('./routes/user');
const user = require('./controllers/user');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

app.use(bodyParser.json());

app.use('/api/user',userRouter);

app.listen(port,()=>{
    console.log("Server has started at port ${port}");
})