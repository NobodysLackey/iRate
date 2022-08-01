const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/restaurants', controllers.getAllRestaurants)
router.post('/restaurants', controllers.createRestaurant)
router.get('/restaurants/:id', controllers.getOneRestaurant)

module.exports = router;