const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const routes = require('./routes')
const db = require('./db')

const app = express()

// MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(logger('dev'))
app.use(express.static(`${__dirname}/client/build`))


// ROUTES
app.use('/api', routes)

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => 
  console.log('server is running at PORT', PORT)
)