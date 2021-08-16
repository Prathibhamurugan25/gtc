const service = require('./wish_list.service');

const getWish_List = (req, res) => {
    service.getWish_List(req).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send("Internal Server Error");
    })
}

const saveWish_List = (req, res) => {
    service.saveWish_List(req).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).send("Internal Server Error");
    })
}
const updateWish_List = (req, res) => {
    service.updateWish_List(req).then((result) => {
        res.status(200).send("updated successfully");
    }).catch((err) => {
        console.log(err);
        res.status(500).send("Internal Server Error");
    })
}

const deleteWish_List = (req, res) => {
    service.deleteWish_List(req).then((result) => {
        res.status(200).send("Deleted successfully");
    }).catch((err) => {
        console.log(err);
        res.status(500).send("Internal Server Error");
    })
}
const getWish_ListById = (req, res) => {
    service.getWish_ListById(req).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).send("Internal Server Error");
    })
}

module.exports = {
    getWish_List,
    saveWish_List,
    updateWish_List,
    deleteWish_List,
    getWish_ListById
}
