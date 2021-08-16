const service = require('./country.service');

const getCountry = (req, res) => {
    service.getCountry(req).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send("Internal Server Error");
    })
}

const saveCountry = (req, res) => {
    service.saveCountry(req).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).send("Internal Server Error");
    })
}
const updateCountry = (req, res) => {
    service.updateCountry(req).then((result) => {
        res.status(200).send("updated successfully");
    }).catch((err) => {
        console.log(err);
        res.status(500).send("Internal Server Error");
    })
}

const deleteCountry = (req, res) => {
    service.deleteCountry(req).then((result) => {
        res.status(200).send("Deleted successfully");
    }).catch((err) => {
        console.log(err);
        res.status(500).send("Internal Server Error");
    })
}
const getCountryById = (req, res) => {
    service.getCountryById(req).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).send("Internal Server Error");
    })
}

module.exports = {
    getCountry,
    saveCountry,
    updateCountry,
    deleteCountry,
    getCountryById
}
