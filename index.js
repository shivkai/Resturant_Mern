const express = require('express');
const app = express();
const register = require('./routes/Register');
const login = require('./routes/Login');
const cart = require('./routes/Cart');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
app.use(cors({
    origin:["http://localhost:3000"],
    methods:["GET","POST","HEAD"],
    credentials:true
}));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api/register',cors(),register);
app.use('/api/login',cors(),login);
app.use('/api/cart',cors(),cart);

mongoose.connect(process.env.REACT_APP_DB_KEY,{ useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=>{
    console.log("Db up");
  })
  .catch((err)=>{console.log(err)});
app.get('/home',(req,res)=>{
    res.send("Hi Welcome");
})

if(process.env.NODE_ENV=="production"){
  app.use(express.static("build"));
}

app.listen(process.env.PORT|| 2323,()=>{console.log('I am up at 2323')});