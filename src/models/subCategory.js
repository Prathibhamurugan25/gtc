const mongoose = require('mongoose');

const subCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    categoryId: {
        type: String,
        required: true,
        trim: true
    },

    status: {
        type: String,
        enum : ['ACTIVE','INACTIVE'],
        default: 'ACTIVE'
    }
});

const subCategory = mongoose.model("subCategory", subCategorySchema);

module.exports = subCategory;
