const { Review } = require('../models')

const getAllReviews = async (req, res) => {
    let allReviews = await Review.find({})
    res.send(allReviews)
}

const createReview = async (req, res) => {
    let newReview = await Review.create(req.body)
    res.send(newReview)
}

const getReview = async (req, res) => {
    let review = await Review.findById(req.params.id)
    res.send(review)
}

module.exports = {
    getAllReviews,
    createReview,
    getReview
}