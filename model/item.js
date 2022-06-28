const mongoose = require('mongoose');


const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required:true
    },
    price: {
        type: String,
        trim:true
        },
    img: {
        type: String,
        trim:true,
        default:'/food.jpg'
    },
});


const Item = mongoose.model('Item', itemSchema);

module.exports = Item;