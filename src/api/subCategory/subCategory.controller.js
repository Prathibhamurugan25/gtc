const service = require('./subCategory.service');

const getsubCategory = (req, res) => {
    service.getsubCategory(req).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send("Internal Server Error");
    })
}

const savesubCategory = (req, res) => {
    service.savesubCategory(req).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).send("Internal Server Error");
    })
}
const updatesubCategory = (req, res) => {
    service.updatesubCategory(req).then((result) => {
        res.status(200).send("updated successfully");
    }).catch((err) => {
        console.log(err);
        res.status(500).send("Internal Server Error");
    })
}

const deletesubCategory= (req, res) => {
    service.deletesubCategory(req).then((result) => {
        res.status(200).send("Deleted successfully");
    }).catch((err) => {
        console.log(err);
        res.status(500).send("Internal Server Error");
    })
}
const getsubCategoryById = (req, res) => {
    service.getsubCategoryById(req).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).send("Internal Server Error");
    })
}

module.exports = {
    getsubCategory,
    savesubCategory,
    updatesubCategory,
    deletesubCategory,
    getsubCategoryById
}
