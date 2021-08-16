const User = require("../../models/address");

const getAddress = (req) => {
    try {
        return Address.find(req.query);
    } catch (e) {
        return e;
    }
}

const saveAddress = (req) => {
    try {
        var address = new Address(req.body);
        return address.save();
    } catch (e) {
        return e;
    }
}
const updateAddress = (req) => {
    try {
        return Address.findByIdAndUpdate(req.params.id, req.body);
    } catch (e) {
        return e;
    }
}

const deleteAddress = (req) => {
    try {
        return Address.findByIdAndDelete(req.params.id);
    } catch (e) {
        return e;
    }
}
const getAddressById = (req) => {
    try {
        return Address.findById(req.params.id);
    } catch (e) {
        return e;
    }
}

module.exports = {
    getAddress,
    saveAddress,
    updateAddress,
    deleteAddress,
    getAddressById
}
