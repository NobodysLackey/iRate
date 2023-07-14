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

  let initialFormState = {
    title: '',
    name: '',
    body: '',
    rating: ''
  }

  const [anger, setAnger] = useState("😠")
  const [restaurants, setRestaurants] = useState([])
  const [selectedRestaurant, setSelectedRestaurant] = useState(null)
  const [formState, setFormState] = useState(initialFormState)
  const [editing, setEditing] = useState(false)

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

  const createNewReview = async () => {
    let response = await axios.post(`${BASE_URL}/api/restaurants/${selectedRestaurant._id}/reviews`, { ...formState, restaurant: selectedRestaurant._id })
    
    let modifiedRestaurant = selectedRestaurant
    modifiedRestaurant.reviews.push(response.data)
    setSelectedRestaurant(modifiedRestaurant)
  }

  const updateReview = async (index) => {
    let response = await axios.put(`${BASE_URL}/api/reviews/${formState._id}`, formState)
    
    let modifiedRestaurant = selectedRestaurant
    modifiedRestaurant.reviews.splice(index, 1, response.data)
    setSelectedRestaurant(modifiedRestaurant)
  }

  const handleSubmit = async (event, index) => {
    event.preventDefault()

    if(!editing) {
      await createNewReview()
    } else {
      await updateReview(index)
    }

    await getRestaurants()

    setFormState(initialFormState)
    setEditing(false)
    
    navigate(`/restaurants/${selectedRestaurant._id}`)
  }

  const editReview = (review, index) => {
    setFormState(review)
    setEditing(true)
    navigate(`/restaurants/${selectedRestaurant._id}/review`, {state: {index: index}})
  }

  const newReview = () => {
    setFormState(initialFormState)
    setEditing(false)
    navigate(`/restaurants/${selectedRestaurant._id}/review`)
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
          <Route path="/add" element={<RestaurantForm restaurants={restaurants} setRestaurants={setRestaurants} />} />
          <Route
            path="/restaurants/:restaurantId/review/:reviewId"
            element={<ReviewDetails />}
          />
          <Route
            path="/restaurants/:restaurantId"
            element={<RestaurantDetails selectedRestaurant={selectedRestaurant} deleteReview={deleteReview} editReview={editReview} newReview={newReview} />}
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
