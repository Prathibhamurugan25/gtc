const User = require("../../models/state");

const getState = (req) => {
    try {
        return State.find(req.query);
    } catch (e) {
        return e;
    }
}

const saveState = (req) => {
    try {
        var state = new State(req.body);
        return state.save();
    } catch (e) {
        return e;
    }
}
const updateState = (req) => {
    try {
        return State.findByIdAndUpdate(req.params.id, req.body);
    } catch (e) {
        return e;
    }
}

const deleteState = (req) => {
    try {
        return State.findByIdAndDelete(req.params.id);
    } catch (e) {
        return e;
    }
}
const getStateById = (req) => {
    try {
        return State.findById(req.params.id);
    } catch (e) {
        return e;
    }
}

module.exports = {
    getState,
    saveState,
    updateState,
    deleteState,
    getStateById
}
