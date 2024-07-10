const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
        minlength: 4,
        maxlength: 50
    },
    email: {
        required: true,
        type: String,
        minlength: 8,
        maxlength: 100
    },
    mobile: {
        required: true,
        type: String,
        minlength: 10,
        maxlength: 10
    },
    password: {
        required: true,
        type: String,
        minlength: 8
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;