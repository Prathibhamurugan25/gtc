const service = require('./ad.service');

const getAd = (req, res) => {
    service.getAd(req).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send("Internal Server Error");
    })
}

const saveAd = (req, res) => {
    console.log("-----------------",req.body);
    service.saveAd(req).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).send("Internal Server Error");
    })
}
const updateAd = (req, res) => {
    service.updateAd(req).then((result) => {
        res.status(200).send("updated successfully");
    }).catch((err) => {
        console.log(err);
        res.status(500).send("Internal Server Error");
    })
}

const deleteAd = (req, res) => {
    service.deleteAd(req).then((result) => {
        res.status(200).send("Deleted successfully");
    }).catch((err) => {
        console.log(err);
        res.status(500).send("Internal Server Error");
    })
}
const getAdById = (req, res) => {
    service.getAdById(req).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).send("Internal Server Error");
    })
}

module.exports = {
    getAd,
    saveAd,
    updateAd,
    deleteAd,
    getAdById
}
