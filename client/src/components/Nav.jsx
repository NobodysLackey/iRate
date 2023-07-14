import { NavLink, Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="flex-row">
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
        <NavLink
          to="/add"
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          Add A Restaurant
        </NavLink>
      </div>
    </nav>
  )
}

export default Nav
