const User = require("../../models/order");

const getOrder = (req) => {
    try {
        return Order.find(req.query);
    } catch (e) {
        return e;
    }
}

const saveOrder = (req) => {
    try {
        var order = new Order(req.body);
        return order.save();
    } catch (e) {
        return e;
    }
}
const updateOrder = (req) => {
    try {
        return Order.findByIdAndUpdate(req.params.id, req.body);
    } catch (e) {
        return e;
    }
}

const deleteOrder = (req) => {
    try {
        return Order.findByIdAndDelete(req.params.id);
    } catch (e) {
        return e;
    }
}
const getOrderById = (req) => {
    try {
        return Order.findById(req.params.id);
    } catch (e) {
        return e;
    }
}

module.exports = {
    getOrder,
    saveOrder,
    updateOrder,
    deleteOrder,
    getOrderById
}
