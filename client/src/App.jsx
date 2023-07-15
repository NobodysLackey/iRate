import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { BASE_URL } from './globals'
import { CheckSession } from './services/auth'
import Client from './services/api'
import './App.css'

import RestaurantDetails from './pages/RestaurantDetails'
import RestaurantList from './pages/RestaurantList'
import RestaurantForm from './pages/RestaurantForm'
import ReviewDetails from './pages/ReviewDetails'
import ReviewForm from './pages/ReviewForm'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
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

  const [user, setUser] = useState(null)
  const [anger, setAnger] = useState('😠')
  const [restaurants, setRestaurants] = useState([])
  const [selectedRestaurant, setSelectedRestaurant] = useState(null)
  const [formState, setFormState] = useState(initialFormState)
  const [editing, setEditing] = useState(false)

  const getRestaurants = async () => {
    const res = await Client.get(`${BASE_URL}/restaurants`)
    setRestaurants(res.data)
  }

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    localStorage.clear()
  }

  const checkToken = async () => {
    //If a token exists, sends token to localStorage to persist logged in user
    const user = await CheckSession()
    setUser(user)
  }

  const toggleEmoji = () => {
    if (anger === '😠') {
      setAnger('😡')
    } else if (anger === '😡') {
      setAnger('🤬')
    } else if (anger === '🤬') {
      setAnger('😠')
    }
  }

  const chooseRestaurant = (selected) => {
    setSelectedRestaurant(selected)
    navigate(`/restaurants/${selected._id}`)
  }

  const deleteReview = async (reviewId, index) => {
    await Client.delete(`${BASE_URL}/reviews/${reviewId}`)
    await getRestaurants()
    let modifiedRestaurant = selectedRestaurant
    modifiedRestaurant.reviews.splice(index, 1)
    setSelectedRestaurant(modifiedRestaurant)
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value })
  }

  const createNewReview = async () => {
    let response = await Client.post(
      `${BASE_URL}/restaurants/${selectedRestaurant._id}`,
      { ...formState, restaurant: selectedRestaurant._id }
    )

    let modifiedRestaurant = selectedRestaurant
    modifiedRestaurant.reviews.push(response.data)
    setSelectedRestaurant(modifiedRestaurant)
  }

  const updateReview = async (index) => {
    let response = await Client.put(
      `${BASE_URL}/reviews/${formState._id}`,
      formState
    )

    let modifiedRestaurant = selectedRestaurant
    modifiedRestaurant.reviews.splice(index, 1, response.data)
    setSelectedRestaurant(modifiedRestaurant)
  }

  const handleSubmit = async (event, index) => {
    event.preventDefault()

    if (!editing) {
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
    navigate(`/restaurants/${selectedRestaurant._id}/review`, {
      state: { index: index }
    })
  }

  const newReview = () => {
    setFormState(initialFormState)
    setEditing(false)
    navigate(`/restaurants/${selectedRestaurant._id}/review`)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
    getRestaurants()
  }, [])

  return (
    <div className="app">
      <header>
        <Nav user={user} handleLogOut={handleLogOut} />
      </header>
      <main>
        <Routes>
          <Route
            index
            element={<Home toggleEmoji={toggleEmoji} anger={anger} />}
          />
          <Route
            path="/restaurants"
            element={
              <RestaurantList
                restaurants={restaurants}
                chooseRestaurant={chooseRestaurant}
              />
            }
          />
          <Route
            path="/add"
            element={
              <RestaurantForm
                restaurants={restaurants}
                setRestaurants={setRestaurants}
              />
            }
          />
          <Route
            path="/restaurants/:restaurantId/review/:reviewId"
            element={<ReviewDetails />}
          />
          <Route
            path="/restaurants/:restaurantId"
            element={
              <RestaurantDetails
                selectedRestaurant={selectedRestaurant}
                deleteReview={deleteReview}
                editReview={editReview}
                newReview={newReview}
              />
            }
          />
          <Route
            path="/restaurants/:restaurantId/review"
            element={
              <ReviewForm
                formState={formState}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            }
          />
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
