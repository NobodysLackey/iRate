const { Review } = require('../models')

const getAllReviews = async (req, res) => {
    let allReviews = await Review.find({})
    res.send(allReviews)
}

module.exports = {
    getAllReviews
}