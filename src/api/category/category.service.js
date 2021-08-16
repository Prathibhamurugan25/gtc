const Category = require("../../models/category");

const getCategory = (req) => {
    try {
        return Category.find(req.query);
    } catch (e) {
        return e;
    }
}

const saveCategory = (req) => {
    try {
        var category = new Category(req.body);
        return category.save();
    } catch (e) {
        return e;
    }
}
const updateCategory = (req) => {
    try {
        return Category.findByIdAndUpdate(req.params.id, req.body);
    } catch (e) {
        return e;
    }
}

const deleteCategory = (req) => {
    try {
        return Category.findByIdAndDelete(req.params.id);
    } catch (e) {
        return e;
    }
}
const getCategoryById = (req) => {
    try {
        return Category.findById(req.params.id);
    } catch (e) {
        return e;
    }
}

module.exports = {
    getCategory,
    saveCategory,
    updateCategory,
    deleteCategory,
    getCategoryById
}
