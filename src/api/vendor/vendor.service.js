const Vendor = require("../../models/vendor");

const getVendor = (req) => {
    try {
        return Vendor.find(req.query);
    } catch (e) {
        return e;
    }
}

const saveVendor = (req) => {
    try {
        var vendor = new Vendor(req.body);
        return vendor.save();
    } catch (e) {
        return e;
    }
}
const updateVendor = (req) => {
    try {
        return Vendor.findByIdAndUpdate(req.params.id, req.body);
    } catch (e) {
        return e;
    }
}

const deleteVendor = (req) => {
    try {
        return Vendor.findByIdAndDelete(req.params.id);
    } catch (e) {
        return e;
    }
}
const getVendorById = (req) => {
    try {
        return Vendor.findById(req.params.id);
    } catch (e) {
        return e;
    }
}

module.exports = {
    getVendor,
    saveVendor,
    updateVendor,
    deleteVendor,
    getVendorById
}
