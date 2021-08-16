const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        enum : ['ACTIVE','INACTIVE'],
        default: 'ACTIVE'
    },
    vendorName: {
        type: String,
        required: true,
        trim: true
    },
    quantityAvailable: {
        type: Number,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    categoryId: {
        type: String,
        trim: true,
        required: true
    },
    subCategory: {
        type: String,
        trim: true,
        required: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    }
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
