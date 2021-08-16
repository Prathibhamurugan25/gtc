const User = require("../../models/plan");

const getPlan = (req) => {
    try {
        return Plan.find(req.query);
    } catch (e) {
        return e;
    }
}

const savePlan = (req) => {
    try {
        var plan = new Plan(req.body);
        return plan.save();
    } catch (e) {
        return e;
    }
}
const updatePlan = (req) => {
    try {
        return Plan.findByIdAndUpdate(req.params.id, req.body);
    } catch (e) {
        return e;
    }
}

const deletePlan = (req) => {
    try {
        return Plan.findByIdAndDelete(req.params.id);
    } catch (e) {
        return e;
    }
}
const getPlanById = (req) => {
    try {
        return Plan.findById(req.params.id);
    } catch (e) {
        return e;
    }
}

module.exports = {
    getPlan,
    savePlan,
    updatePlan,
    deletePlan,
    getPlanById
}
