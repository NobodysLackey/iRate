import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/auth'
import { STATES } from '../globals'

const Register = () => {
  let navigate = useNavigate()

  const initialState = {
    firstName: '',
    lastName: '',
    city: '',
    state: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log({
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      city: formValues.city,
      state: formValues.state,
      email: formValues.email,
      password: formValues.password
    })

    await RegisterUser({
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      city: formValues.city,
      state: formValues.state,
      email: formValues.email,
      password: formValues.password
    })
    setFormValues(initialState)
    navigate('/signin')
  }

  return (
    <section className="page">
      <h2 className="register-msg">
        Are you tired of these restaurants getting away with bad food and bad
        service?
      </h2>
      <h2 className="register-msg">
        Join <span id="home-logo">iRate</span> and do something about it!
      </h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <div>
          <input
            onChange={handleChange}
            name="firstName"
            type="text"
            placeholder="First Name"
            value={formValues.firstName}
            required
          />
          <input
            onChange={handleChange}
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={formValues.lastName}
            required
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            name="city"
            type="text"
            placeholder="City"
            value={formValues.city}
            required
          />
          <select
            onChange={handleChange}
            name="state"
            placeholder="State"
            value={formValues.state}
            required
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
        <div>
          <input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Email"
            value={formValues.email}
            required
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="Password"
            value={formValues.password}
            required
          />
          <input
            onChange={handleChange}
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={formValues.confirmPassword}
            required
          />
        </div>
        <button type="submit">Get Mad</button>
      </form>
    </section>
  )
}

export default Register
