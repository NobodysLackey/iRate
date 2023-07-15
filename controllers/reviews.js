const { Review } = require('../models')

const getAllReviews = async (req, res) => {
  let allReviews = await Review.find({})
  res.send(allReviews)
}

const getReview = async (req, res) => {
  let review = await Review.findById(req.params.id).populate('restaurant')
  res.send(review)
}

const updateReview = async (req, res) => {
  let updatedReview = await Review.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  res.send(updatedReview)
}

const deleteReview = async (req, res) => {
  let deletedRecord = await Review.findByIdAndDelete(req.params.id)
  res.send(deletedRecord)
}

module.exports = {
  getAllReviews,
  getReview,
  updateReview,
  deleteReview
}
