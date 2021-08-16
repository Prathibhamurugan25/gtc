const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    Email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowerCase: true
    },
    passWord: {
        type: String,
        trim: true,
        required: true,
        minlength: 8
    },
    cPassword: {
        type: String,
        trim: true,
        required: true,
        minlength: 8
    }

});

const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;
