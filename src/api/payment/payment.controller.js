const service = require('./payment.service');

const getPayment = (req, res) => {
    service.getPayment(req).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send("Internal Server Error");
    })
}

const savePayment = (req, res) => {
    service.savePayment(req).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).send("Internal Server Error");
    })
}
const updatePayment = (req, res) => {
    service.updatePayment(req).then((result) => {
        res.status(200).send("updated successfully");
    }).catch((err) => {
        console.log(err);
        res.status(500).send("Internal Server Error");
    })
}

const deletePayment = (req, res) => {
    service.deletePayment(req).then((result) => {
        res.status(200).send("Deleted successfully");
    }).catch((err) => {
        console.log(err);
        res.status(500).send("Internal Server Error");
    })
}
const getPaymentById = (req, res) => {
    service.getPaymentById(req).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).send("Internal Server Error");
    })
}

module.exports = {
    getPayment,
    savePayment,
    updatePayment,
    deletePayment,
    getPaymentById
}
