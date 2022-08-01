const mongoose = require('mongoose')
const restaurantSchema = require('./restaurant')

const Restaurant = mongoose.model('Restaurant', restaurantSchema)

module.exports = {
    Restaurant
}