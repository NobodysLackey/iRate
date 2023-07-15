const mongoose = require('mongoose')
const restaurantSchema = require('./restaurant')
const reviewSchema = require('./review')
const userSchema = require('./user')

const Restaurant = mongoose.model('Restaurant', restaurantSchema)
const Review = mongoose.model('Review', reviewSchema)
const User = mongoose.model('User', userSchema)

module.exports = {
    Restaurant,
    Review,
    User
}