import { NavLink, Link } from 'react-router-dom'

const Nav = ({ user, handleLogOut }) => {
  let userOptions
  if (user) {
    userOptions = (
      <>
        <NavLink
          to="/add"
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          Add A Restaurant
        </NavLink>
        <Link
          onClick={handleLogOut}
          to="/"
        >
          Sign Out
        </Link>
      </>
    )
  }

  const publicOptions = (
    <>
      <NavLink
        to="/register"
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        Register
      </NavLink>
      <NavLink
        to="/signin"
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        Sign In
      </NavLink>
    </>
  )

  return (
    <nav>
      <div id="logo">
        <Link to="/">iRate</Link>
      </div>
      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="/restaurants"
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          Restaurants
        </NavLink>

        {user ? userOptions : publicOptions}
      </div>
    </nav>
  )
}

export default Nav
