const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const SignupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },

});

module.exports = mongoose.model('User', SignupSchema);
