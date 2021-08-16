const User = require("../../models/wish_list");

const getWish_List = (req) => {
    try {
        return Wish_List.find(req.query);
    } catch (e) {
        return e;
    }
}

const saveWish_List = (req) => {
    try {
        var wish_list = new Wish_List(req.body);
        return wish_list.save();
    } catch (e) {
        return e;
    }
}
const updateWish_List = (req) => {
    try {
        return Wish_List.findByIdAndUpdate(req.params.id, req.body);
    } catch (e) {
        return e;
    }
}

const deleteWish_List = (req) => {
    try {
        return Wish_List.findByIdAndDelete(req.params.id);
    } catch (e) {
        return e;
    }
}
const getWish_ListById = (req) => {
    try {
        return Wish_List.findById(req.params.id);
    } catch (e) {
        return e;
    }
}

module.exports = {
    getWish_List,
    saveWish_List,
    updateWish_List,
    deleteWish_List,
    getWish_ListById
}
