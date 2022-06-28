const express = require('express');
const router = express.Router();
const User = require('../model/user');
router.post('/:id',async (req,res)=>{
    const arr = (req.body).map((item)=>{
        return parseInt(item);
    });
    console.log(arr);
    const {id } = req.params;
    const user = await User.findById(id);
    if(user)
    {
        var len = 0;
        var tt =0;
        console.log(user.cart);
        while(tt<user.cart.length)
        {
            user.cart.pop();
            tt++;
        }
     while(len<arr.length){
        user.cart.push(arr[len]);
        console.log(arr[len]);
        len++;
        }
        await user.save();
        res.json("added");
    }
    else{
        res.json("error");
    }
});

router.get('/:id',async (req,res)=>{
    const {id} = req.params;
    const user = await User.findById(id);
    console.log(user);
    if(user){
        res.json({cart:user.cart})

    }
    else{
    res.json("error");
    }
})

module.exports = router;