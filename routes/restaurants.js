const router = require('express').Router()
const { restaurants } = require('../controllers')
const middleware = require('../middleware')

router.get('/', restaurants.getAllRestaurants)
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  restaurants.createRestaurant
)
router.get('/:id', restaurants.getOneRestaurant)

module.exports = router
