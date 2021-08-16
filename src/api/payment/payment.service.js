const User = require("../../models/payment");

const getPayment = (req) => {
    try {
        return Payment.find(req.query);
    } catch (e) {
        return e;
    }
}

const savePayment = (req) => {
    try {
        var Payment = new Payment(req.body);
        return Payment.save();
    } catch (e) {
        return e;
    }
}
const updatePayment = (req) => {
    try {
        return Payment.findByIdAndUpdate(req.params.id, req.body);
    } catch (e) {
        return e;
    }
}

const deletePayment = (req) => {
    try {
        return Payment.findByIdAndDelete(req.params.id);
    } catch (e) {
        return e;
    }
}
const getPaymentById = (req) => {
    try {
        return Payment.findById(req.params.id);
    } catch (e) {
        return e;
    }
}

module.exports = {
    getPayment,
    savePayment,
    updatePayment,
    deletePayment,
    getPaymentById
}
