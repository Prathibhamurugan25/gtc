const mongoose = require('mongoose');

const AdSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    targetUrl: {
        type: String,
        trim: true,
    },
    click: {
        type: Number
    },
    impression: {
        type: Number
    },
    status: {
        type: String,
        enum : ['ACTIVE','INACTIVE'],
        default: 'ACTIVE'
    }
});

const Ad = mongoose.model("Ad", AdSchema);

module.exports = Ad;
