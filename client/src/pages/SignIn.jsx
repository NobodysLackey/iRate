import { useState } from 'react'
import { SignInUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const SignIn = ({ setUser }) => {
  let navigate = useNavigate()

  const [formValues, setFormValues] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues({ email: '', password: '' })
    setUser(payload)
    navigate('/restaurants')
  }

  return (
    <section className="page">
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="example@example.com"
          value={formValues.email}
          required
        />
        <input
          onChange={handleChange}
          type="password"
          name="password"
          value={formValues.password}
          required
        />
        <button disabled={!formValues.email || !formValues.password}>
          Sign In
        </button>
      </form>
    </section>
  )
}

export default SignIn
