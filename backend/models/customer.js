const mongoose = require('mongoose');

let Customer = new mongoose.Schema({
    product_name:{
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    quantity_left : {
        type:Number,
        required : true
    },
    customer_making_order :{
        type: String,
        required : true
    },
    vendor_name :{
        type : String,
        required:true
    },
    status : {
        type : String,
        required : true
    }
});
module.exports = mongoose.model('Customer', Customer);