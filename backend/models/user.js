const mongoose = require('mongoose');

let User = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    user_type: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', User);