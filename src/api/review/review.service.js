const User = require("../../models/review");

const getReview = (req) => {
    try {
        return Review.find(req.query);
    } catch (e) {
        return e;
    }
}

const saveReview = (req) => {
    try {
        var review = new Review(req.body);
        return review.save();
    } catch (e) {
        return e;
    }
}
const updateReview = (req) => {
    try {
        return Review.findByIdAndUpdate(req.params.id, req.body);
    } catch (e) {
        return e;
    }
}

const deleteReview = (req) => {
    try {
        return Review.findByIdAndDelete(req.params.id);
    } catch (e) {
        return e;
    }
}
const getReviewById = (req) => {
    try {
        return Review.findById(req.params.id);
    } catch (e) {
        return e;
    }
}

module.exports = {
    getReview,
    saveReview,
    updateReview,
    deleteReview,
    getReviewById
}
