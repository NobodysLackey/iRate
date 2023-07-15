const router = require('express').Router()
const { users } = require('../controllers')
const middleware = require('../middleware')

router.post('/login', users.login)
router.post('/register', users.register)
router.put(
  '/update/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  users.updateUser
)
router.delete(
  '/delete/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  users.deleteUser
)
router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  users.checkSession
)

module.exports = router
