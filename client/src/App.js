import Nav from './components/Nav'
import Home from './pages/Home'
import RestaurantList from './pages/RestaurantList'
import RestaurantForm from './pages/RestaurantForm'
import ReviewDetails from './pages/ReviewDetails'
import RestaurantDetails from './pages/RestaurantDetails'
import ReviewForm from './pages/ReviewForm'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from './globals'
import './App.css'

const App = () => {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    const getRestaurants = async () => {
      const res = await axios.get(`${BASE_URL}/api/restaurants`)
      setRestaurants(res.data)
    }
    getRestaurants()
  }, [])

  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
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
