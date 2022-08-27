const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    product: {
        type: String,
        required: true
    },
    piece: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const userDB = mongoose.model('userdb', schema);

module.exports = userDB;