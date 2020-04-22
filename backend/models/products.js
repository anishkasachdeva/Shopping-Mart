const mongoose = require('mongoose');

let Products = new mongoose.Schema({
    is_dispatched : {
        type: Number,
        default: 0,
        required : true
    },
    is_canceled :
    {
        type : Number,
        default : 0,
        required : true
    },
    username : {
        type : String,
        required : true 
    },
    product_name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Products', Products);