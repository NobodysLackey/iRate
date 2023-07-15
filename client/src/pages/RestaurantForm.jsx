import Client from '../services/api'
import { BASE_URL, STATES } from '../globals'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const RestaurantForm = ({ restaurants, setRestaurants }) => {
  let navigate = useNavigate()

  const initialState = { name: '', city: '', state: '', photo_url: '' }

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
      <form onSubmit={handleSubmit} className='add-form' autoComplete="off">
        <input
          type="text"
          name="name"
          placeholder="Restaurant Name"
          value={formValues.name}
          onChange={handleChange}
          autoComplete="off"
        />
        <div className="location-select">
          <input
            onChange={handleChange}
            name="city"
            type="text"
            placeholder="City"
            value={formValues.city}
            required
            autoComplete="off"
          />
          <select
            onChange={handleChange}
            name="state"
            placeholder="State"
            value={formValues.state}
            required
            autoComplete="off"
          >
            <option value="" disabled>
              {' '}
              State &gt;{' '}
            </option>
            {STATES.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <input
          type="text"
          name="photo_url"
          placeholder="Photo URL"
          value={formValues.photo_url}
          onChange={handleChange}
          autoComplete="off"
        />
        <button type="submit">Add</button>
      </form>
    </section>
  )
}

export default RestaurantForm
