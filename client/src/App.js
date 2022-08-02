import Nav from './components/Nav'
import Home from './pages/Home'
import RestaurantList from './pages/RestaurantList'
import RestaurantForm from './pages/RestaurantForm'
import ReviewDetails from './pages/ReviewDetails'
import RestaurantDetails from './pages/RestaurantDetails'
import ReviewForm from './pages/ReviewForm'
import { Routes, Route } from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/restaurants" element={<RestaurantList />} />
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
