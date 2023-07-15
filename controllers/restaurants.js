const { Restaurant } = require('../models')

const getAllRestaurants = async (req, res) => {
  let restaurants = await Restaurant.find({}).populate('reviews')
  res.send(restaurants)
}

const createRestaurant = async (req, res) => {
  let createdRestaurant = await Restaurant.create(req.body)
  res.send(createdRestaurant)
}

const getOneRestaurant = async (req, res) => {
  let foundRestaurant = await Restaurant.findById(req.params.id).populate(
    'reviews'
  )
  res.send(foundRestaurant)
}

module.exports = {
  getAllRestaurants,
  createRestaurant,
  getOneRestaurant
}
