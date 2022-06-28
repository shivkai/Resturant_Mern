const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,required:true},
    cart:[{
        type: Array,
        ref:'Item'
}]

})

 const User = mongoose.model('User',userSchema);
module.exports=User;