const { Review, Restaurant } = require('../models')

const getAllReviews = async (req, res) => {
    let allReviews = await Review.find({})
    res.send(allReviews)
}

const createReview = async (req, res) => {
    let newReview = await Review.create(req.body)
    let restaurant = await Restaurant.findById(req.params.id)
    restaurant.reviews.push(newReview._id)
    restaurant.save()
    res.send(restaurant)
}

const getReview = async (req, res) => {
    let review = await Review.findById(req.params.id)
    res.send(review)
}

const updateReview = async (req, res) => {
    let updatedReview = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.send(updatedReview)
}

const deleteReview = async (req, res) => {
    let deletedRecord = await Review.findByIdAndDelete(req.params.id)
    res.send(deletedRecord)
}

module.exports = {
    getAllReviews,
    createReview,
    getReview,
    updateReview,
    deleteReview
}