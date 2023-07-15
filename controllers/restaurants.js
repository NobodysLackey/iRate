const { Restaurant, Review } = require('../models')

const getAllRestaurants = async (req, res) => {
  let restaurants = await Restaurant.find({}).populate('reviews')
  res.send(restaurants)
}

const createReview = async (req, res) => {
  let restaurant = await Restaurant.findById(req.params.id)
  let newReview = await Review.create(req.body)

  restaurant.reviews.push(newReview._id)
  restaurant.save()
  res.send(newReview)
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
  getOneRestaurant,
  createReview
}
