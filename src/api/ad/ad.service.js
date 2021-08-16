const Ad = require("../../models/ad");

const getAd = (req) => {
    try {
        return Ad.find(req.query);
    } catch (e) {
        return e;
    }
}

const saveAd = (req) => {
    try {
        var ad = new Ad(req.body);
        return ad.save();
    } catch (e) {
        return e;
    }
}
const updateAd = (req) => {
    try {
        return Ad.findByIdAndUpdate(req.params.id, req.body);
    } catch (e) {
        return e;
    }
}

const deleteAd = (req) => {
    try {
        return Ad.findByIdAndDelete(req.params.id);
    } catch (e) {
        return e;
    }
}
const getAdById = (req) => {
    try {
        return Ad.findById(req.params.id);
    } catch (e) {
        return e;
    }
}

module.exports = {
    getAd,
    saveAd,
    updateAd,
    deleteAd,
    getAdById
}
