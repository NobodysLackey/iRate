const { User } = require('../models')
const middleware = require('../middleware')

const register = async (req, res) => {
  try {
    // Extracts the necessary fields from the request body
    const { email, password, firstName, lastName, city, state } = req.body
    // Hashes the provided password
    let passwordDigest = await middleware.hashPassword(password)
    // Checks if there has already been a user registered with that email
    let existingUser = await User.findOne({ email })
    if (existingUser) {
      return res
        .status(400)
        .send('🤬 A user with that email has already been registered!')
    } else {
      // Creates a new user
      const user = await User.create({
        firstName,
        lastName,
        city,
        state,
        email,
        passwordDigest
      })
      // Sends the user as a response
      res.send(user)
    }
  } catch (error) {
    throw error
  }
}

const login = async (req, res) => {
  try {
    // Extracts the necessary fields from the request body
    const { email, password } = req.body
    // Finds a user by a particular field (in this case, email)
    const user = await User.findOne({ email })
    // Checks if the password matches the stored digest
    let matched = await middleware.comparePassword(
      user.passwordDigest,
      password
    )
    // If they match, constructs a payload object of values we want on the front end
    if (matched) {
      let payload = {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        city: user.city,
        state: user.state,
        email: user.email
      }
      // Creates our JWT and packages it with our payload to send as a response
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: '🤬 Unauthorized' })
  } catch (error) {
    console.log(error)
    res.status(401).send({
      status: 'Error',
      msg: '🤬 An error has occurred while signing in!'
    })
  }
}

const updateUser = async (req, res) => {
  try {
    // Extracts the necessary fields from the request body
    const { oldPassword, newPassword } = req.body
    // Finds a user by a particular field (in this case, the user's id from the URL param)
    let user = await User.findById(req.params.user_id)
    // Checks if the password matches the stored digest
    let matched = await middleware.comparePassword(
      user.passwordDigest,
      oldPassword
    )
    // If they match, hashes the new password, updates the db with the new digest, then sends the user as a response
    if (matched) {
      let passwordDigest = await middleware.hashPassword(newPassword)
      user = await User.findByIdAndUpdate(req.params.user_id, {
        passwordDigest
      })
      let payload = {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        city: user.city,
        state: user.state,
        email: user.email
      }
      return res.send({ status: 'Password Updated!', user: payload })
    }
    res
      .status(401)
      .send({ status: 'Error', msg: '🤬 Old Password did not match!' })
  } catch (error) {
    console.log(error)
    res.status(401).send({
      status: 'Error',
      msg: '🤬 An error has occurred updating password!'
    })
  }
}

const deleteUser = async (req, res) => {
  try {
    let user = await User.findByIdAndDelete(req.params.user_id)
    if (user) {
      let payload = {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        city: user.city,
        state: user.state,
        email: user.email
      }
      return res.send({ status: 'User Deleted!', user: payload })
    }
    res.status(401).send({ status: 'Error', msg: '🤬 User not found!' })
  } catch (error) {
    console.log(error)
    res.status(401).send({
      status: 'Error',
      msg: '🤬 An error has occurred deleting the user!'
    })
  }
}

const checkSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

module.exports = {
  register,
  login,
  updateUser,
  deleteUser,
  checkSession
}
