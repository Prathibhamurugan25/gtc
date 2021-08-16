const Product = require("../../models/product");

const getProduct = (req) => {
    try {
        return Product.find(req.query);
    } catch (e) {
        return e;
    }
}

const saveProduct = (req) => {
    try {
        var product = new Product(req.body);
        return product.save();
    } catch (e) {
        return e;
    }
}
const updateProduct = (req) => {
    try {
        return Product.findByIdAndUpdate(req.params.id, req.body);
    } catch (e) {
        return e;
    }
}

const deleteProduct = (req) => {
    try {
        return Product.findByIdAndDelete(req.params.id);
    } catch (e) {
        return e;
    }
}
const getProductById = (req) => {
    try {
        return Product.findById(req.params.id);
    } catch (e) {
        return e;
    }
}

module.exports = {
    getProduct,
    saveProduct,
    updateProduct,
    deleteProduct,
    getProductById
}
