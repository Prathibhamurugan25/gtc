const mongoose = require('mongoose');

const VendorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    company_name: {
        type: String,
        required: true,
        trim: true
    },
    plan_id: {
        type: Number,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowerCase: true
    },
    password: {
        type: String,
        trim: true,
        required: true,
        minlength: 8
    },
    status: {
        type: String,
        enum : ['ACTIVE','INACTIVE'],
        default: 'ACTIVE'
    },
});

const Vendor = mongoose.model("Vendor", VendorSchema);

module.exports = Vendor;
