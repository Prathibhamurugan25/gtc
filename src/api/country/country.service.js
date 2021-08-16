const User = require("../../models/country");

const getCountry = (req) => {
    try {
        return Country.find(req.query);
    } catch (e) {
        return e;
    }
}

const saveCountry = (req) => {
    try {
        var country = new Country(req.body);
        return country.save();
    } catch (e) {
        return e;
    }
}
const updateCountry = (req) => {
    try {
        return Country.findByIdAndUpdate(req.params.id, req.body);
    } catch (e) {
        return e;
    }
}

const deleteCountry = (req) => {
    try {
        return Country.findByIdAndDelete(req.params.id);
    } catch (e) {
        return e;
    }
}
const getCountryById = (req) => {
    try {
        return Country.findById(req.params.id);
    } catch (e) {
        return e;
    }
}

module.exports = {
    getCountry,
    saveCountry,
    updateCountry,
    deleteCountry,
    getCountryById
}
