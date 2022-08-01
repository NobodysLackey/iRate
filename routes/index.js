const { Router } = require('express');
const { restaurants, reviews } = require('../controllers')
const router = Router();

// restaurant routes
router.get('/restaurants', restaurants.getAllRestaurants)
router.post('/restaurants', restaurants.createRestaurant)
router.get('/restaurants/:id', restaurants.getOneRestaurant)

// review routes
router.get('/reviews', reviews.getAllReviews)

module.exports = router;