const express = require('express');
const router = express.Router();
const User = require('../model/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

router.post('/',async (req,res)=>{
    const {email,password} = req.body;

   const user = await User.findOne({
       email
   })
//    console.log(user);
   if(user)
   {
       const userId = user._id.toString();
       const cart = user.cart;
    const isPasswordValid = await bcrypt.compare(password,user.password);
    if(isPasswordValid){
       const token = jwt.sign({
           email,
           userId,
       },'averypowerfulsecret');
       console.log(token)
      return res.status(200).json({msg:"Login Successfull",user:token,cart:cart});
    }
    else{
        return res.json({msg:"Username or Password Invalid",user:false});

    }
    }
    else{
       return res.json({msg:"Invalid credentials"});    
   }
    
})

module.exports = router;