const express = require('express')
const PORT = process.env.PORT || 3001

<<<<<<< HEAD
const app = express() 

// routes 

app.get('/', (req, res) => {
  res.send('root route hit')
})


app.listen(PORT, () => 
  console.log('server is running at PORT', PORT)

)
=======
const app = express()

// simple testing route
app.get('/', (req, res) => {
    res.send('I have hit the root route')
})

app.listen(PORT, () => {
    console.log(`I am currently running at PORT:`, PORT)
})
>>>>>>> 5a9bd12 (built basic server boilerplate)
