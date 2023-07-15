const mongoose = require('mongoose')
require('dotenv').config()

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('😡 Successfully connected to iRate database . . .')
  })
  .catch((e) => {
    console.error('🤬 Connection error', e.message)
  })
// mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db