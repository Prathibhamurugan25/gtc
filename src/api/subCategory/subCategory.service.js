const subCategory = require("../../models/subCategory");

const getsubCategory = (req) => {
    try {
        return subCategory.find(req.query);
    } catch (e) {
        return e;
    }
}

const savesubCategory = (req) => {
    try {
        var subcategory = new subCategory(req.body);
        return subcategory.save();
    } catch (e) {
        return e;
    }
}
const updatesubCategory = (req) => {
    try {
        return subCategory.findByIdAndUpdate(req.params.id, req.body);
    } catch (e) {
        return e;
    }
}

const deletesubCategory = (req) => {
    try {
        return subCategory.findByIdAndDelete(req.params.id);
    } catch (e) {
        return e;
    }
}
const getsubCategoryById = (req) => {
    try {
        return subCategory.findById(req.params.id);
    } catch (e) {
        return e;
    }
}

module.exports = {
    getsubCategory,
    savesubCategory,
    updatesubCategory,
    deletesubCategory,
    getsubCategoryById
}
