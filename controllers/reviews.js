const { Review } = require('../models')

const getAllReviews = async (req, res) => {
    let allReviews = await Review.find({})
    res.send(allReviews)
}

const createReview = async (req, res) => {
    let newReview = await Review.create(req.body)
    res.send(newReview)
}

module.exports = {
    getAllReviews,
    createReview
}