import { Routes, Route } from 'react-router-dom'
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
  const [anger, setAnger] = useState("😠")
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    const getRestaurants = async () => {
      const res = await axios.get(`${BASE_URL}/api/restaurants`)
      setRestaurants(res.data)
    }
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
            element={<RestaurantList restaurants={restaurants} />}
          />
          <Route path="/add" element={<RestaurantForm />} />
          <Route
            path="/restaurants/:restaurantId/review/:reviewId"
            element={<ReviewDetails />}
          />
          <Route
            path="/restaurants/:restaurantId"
            element={<RestaurantDetails />}
          />
          <Route
            path="/restaurants/:restaurantId/review"
            element={<ReviewForm />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
