const User = require("../../models/cart");

const getCart = (req) => {
    try {
        return Cart.find(req.query);
    } catch (e) {
        return e;
    }
}

const saveCart = (req) => {
    try {
        var cart = new Cart(req.body);
        return cart.save();
    } catch (e) {
        return e;
    }
}
const updateCart = (req) => {
    try {
        return Cart.findByIdAndUpdate(req.params.id, req.body);
    } catch (e) {
        return e;
    }
}

const deleteCart = (req) => {
    try {
        return Cart.findByIdAndDelete(req.params.id);
    } catch (e) {
        return e;
    }
}
const getCartById = (req) => {
    try {
        return Cart.findById(req.params.id);
    } catch (e) {
        return e;
    }
}

module.exports = {
    getCart,
    saveCart,
    updateCart,
    deleteCart,
    getCartById
}
