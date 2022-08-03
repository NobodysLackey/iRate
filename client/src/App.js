import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { BASE_URL } from './globals'
import axios from 'axios'
import './App.css'

import RestaurantDetails from './pages/RestaurantDetails'
import RestaurantList from './pages/RestaurantList'
import RestaurantForm from './pages/RestaurantForm'
import ReviewDetails from './pages/ReviewDetails'
import ReviewForm from './pages/ReviewForm'
import Nav from './components/Nav'
import Home from './pages/Home'

const App = () => {
  let navigate = useNavigate()

  const [anger, setAnger] = useState("😠")
  const [restaurants, setRestaurants] = useState([])
  const [selectedRestaurant, setSelectedRestaurant] = useState(null)
  const [formState, setFormState] = useState({
    title: '',
    name: '',
    body: '',
    rating: ''
  })

  const getRestaurants = async () => {
    const res = await axios.get(`${BASE_URL}/api/restaurants`)
    setRestaurants(res.data)
  }

  useEffect(() => {
    getRestaurants()
  }, [])

  const toggleEmoji = () => {
    if (anger === "😠") {
      setAnger("😡")
    } else if (anger === "😡") {
      setAnger("🤬")
    } else if (anger === "🤬") {
      setAnger("😠")
    }
  }

  const chooseRestaurant = (selected) => {
    setSelectedRestaurant(selected)
    navigate(`/restaurants/${selected._id}`)
  }

  const deleteReview = async (reviewId, index) => {
    await axios.delete(`${BASE_URL}/api/reviews/${reviewId}`)
    await getRestaurants()
    let modifiedRestaurant = selectedRestaurant
    modifiedRestaurant.reviews.splice(index, 1)
    setSelectedRestaurant(modifiedRestaurant)
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post(`${BASE_URL}/api/restaurants/${selectedRestaurant._id}/reviews`, formState)
    await getRestaurants()

    let modifiedRestaurant = selectedRestaurant
    modifiedRestaurant.reviews.push(formState)
    setSelectedRestaurant(modifiedRestaurant)
    
    navigate(`/restaurants/${selectedRestaurant._id}`)
  }

  return (
    <div className="app">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route index element={<Home toggleEmoji={toggleEmoji} anger={anger} />} />
          <Route
            path="/restaurants"
            element={<RestaurantList restaurants={restaurants} chooseRestaurant={chooseRestaurant} />}
          />
          <Route path="/add" element={<RestaurantForm />} />
          <Route
            path="/restaurants/:restaurantId/review/:reviewId"
            element={<ReviewDetails />}
          />
          <Route
            path="/restaurants/:restaurantId"
            element={<RestaurantDetails selectedRestaurant={selectedRestaurant} deleteReview={deleteReview} />}
          />
          <Route
            path="/restaurants/:restaurantId/review"
            element={<ReviewForm formState={formState} handleChange={handleChange} handleSubmit={handleSubmit} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
