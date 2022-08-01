const mongoose = require('mongoose')
const restaurantSchema = require('./restaurant')
const reviewSchema = require('./review')

const Restaurant = mongoose.model('Restaurant', restaurantSchema)
const Review = mongoose.model('Review', reviewSchema)

module.exports = {
    Restaurant,
    Review
}