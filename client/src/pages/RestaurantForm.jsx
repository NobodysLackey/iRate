import Client from '../services/api'
import { BASE_URL } from '../globals'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const RestaurantForm = ({ restaurants, setRestaurants }) => {
  let navigate = useNavigate()

  const initialState = { name: '', location: '', photo_url: '' }

  const [formValues, setFormValues] = useState(initialState)

  const handleSubmit = async (e) => {
    e.preventDefault()
    let response = await Client.post(`${BASE_URL}/restaurants`, formValues)
    setRestaurants([...restaurants, response.data])
    navigate('/restaurants')
  }

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  return (
    <section className="page">
      <h1 className="title">Add A Restaurant</h1>
      <form onSubmit={handleSubmit} className='add-form'>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formValues.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formValues.location}
          onChange={handleChange}
        />
        <input
          type="text"
          name="photo_url"
          placeholder="Photo URL"
          value={formValues.photo_url}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </section>
  )
}

export default RestaurantForm
