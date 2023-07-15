const router = require('express').Router()
const { reviews } = require('../controllers')
const middleware = require('../middleware')

router.get('/', reviews.getAllReviews)
router.get(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  reviews.getReview
)
router.put(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  reviews.updateReview
)
router.delete(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  reviews.deleteReview
)

module.exports = router
