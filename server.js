const express = require('express')
const PORT = process.env.PORT || 3001
const db = require('./db')

const app = express()

const { Restaurant } = require('./models')

// MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(`${__dirname}/client/build`))


// ROUTES
// get all restaurants
app.get('/restaurants', async (req, res) => {
  let restaurants = await Restaurant.find({})
  res.send(restaurants)
})

// create a restaurant
app.post('/restaurants', async (req, res) => {
    let createdRestaurant = await Restaurant.create(req.body)
    res.send(createdRestaurant)
})

// get a single restaurant
app.get('/restaurants/:id', async (req, res) => {
    let foundRestaurant = await Restaurant.findById(req.params.id)
    res.send(foundRestaurant)
})


app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => 
  console.log('server is running at PORT', PORT)
)
