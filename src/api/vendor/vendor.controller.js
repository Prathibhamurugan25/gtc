const service = require('./vendor.service');

const getVendor = (req, res) => {
    service.getVendor(req).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send("Internal Server Error");
    })
}

const saveVendor = (req, res) => {
    service.saveVendor(req).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).send("Internal Server Error");
    })
}
const updateVendor = (req, res) => {
    service.updateVendor(req).then((result) => {
        res.status(200).send("updated successfully");
    }).catch((err) => {
        console.log(err);
        res.status(500).send("Internal Server Error");
    })
}

const deleteVendor = (req, res) => {
    service.deleteVendor(req).then((result) => {
        res.status(200).send("Deleted successfully");
    }).catch((err) => {
        console.log(err);
        res.status(500).send("Internal Server Error");
    })
}
const getVendorById = (req, res) => {
    service.getVendorById(req).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).send("Internal Server Error");
    })
}

module.exports = {
    getVendor,
    saveVendor,
    updateVendor,
    deleteVendor,
    getVendorById
}
