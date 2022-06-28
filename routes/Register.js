const express = require('express');
const router = express.Router();
const User = require('../model/user');
const bcrypt = require('bcrypt');

router.post('/', async (req,res)=>{
    console.log('data requested');
    try{
    const{email,password} = req.body;
    const newPassword = await bcrypt.hash(password,10);
   const user = await User.create({
        email,
        password:newPassword

    })

    res.status(200).json({msg:"Registered Successfully",user:user});
}
catch(err){
    res.status(400).json({msg:"Registeration failed"});
}
})

module.exports = router;