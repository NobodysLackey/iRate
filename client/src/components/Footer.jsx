import { Link } from 'react-router-dom'

const Footer = ({ toggleEmoji, anger, user }) => {
  return (
    <footer>
      <div>
        <span id="footer-face" onClick={toggleEmoji}>
          {anger}
        </span>
        <Link to="/" id="footer-logo">
          &nbsp;iRate
        </Link>
      </div>
      <div>
        {user ? <h3>Are you mad, {user.firstName}?</h3> : null}
      </div>
    </footer>
  )
}

export default Footer
