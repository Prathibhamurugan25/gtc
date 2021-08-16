const service = require('./address.service');

const getAddress = (req, res) => {
    service.getAddress(req).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send("Internal Server Error");
    })
}

const saveAddress = (req, res) => {
    service.saveAddress(req).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).send("Internal Server Error");
    })
}
const updateAddress = (req, res) => {
    service.updateAddress(req).then((result) => {
        res.status(200).send("updated successfully");
    }).catch((err) => {
        console.log(err);
        res.status(500).send("Internal Server Error");
    })
}

const deleteAddress = (req, res) => {
    service.deleteAddress(req).then((result) => {
        res.status(200).send("Deleted successfully");
    }).catch((err) => {
        console.log(err);
        res.status(500).send("Internal Server Error");
    })
}
const getAddressById = (req, res) => {
    service.getAddressById(req).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).send("Internal Server Error");
    })
}

module.exports = {
    getAddress,
    saveAddress,
    updateAddress,
    deleteAddress,
    getAddressById
}
