const { Router } = require('express');
const { restaurants } = require('../controllers')
const router = Router();

router.get('/restaurants', restaurants.getAllRestaurants)
router.post('/restaurants', restaurants.createRestaurant)
router.get('/restaurants/:id', restaurants.getOneRestaurant)

module.exports = router;