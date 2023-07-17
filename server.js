const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const { restaurants, reviews, users } = require('./routes')

const PORT = process.env.PORT || 3001

const db = require('./db')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(`${__dirname}/client/build`))

app.use('/restaurants', restaurants)
app.use('/reviews', reviews)
app.use('/users', users)

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
 })

app.listen(PORT, () =>
  console.log(`😠 iRate server is running on PORT ${PORT} . . .`)
)
