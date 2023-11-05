import { Link } from 'react-router-dom'

const Footer = ({ toggleEmoji, anger, user }) => {
  return (
    <footer>
      <div id="footer-left">
        <span id="footer-face" onClick={toggleEmoji}>
          {anger}
        </span>
        <Link to="/" id="footer-logo">
          &nbsp;iRate
        </Link>
      </div>
      <div id="footer-center">
        Copyright &copy; 2023 Michael Lackey, iRate. All Rights Reserved.
      </div>
      <div id="footer-right">
        {user ? <h3>Are you mad, {user.firstName}?</h3> : null}
      </div>
    </footer>
  )
}

export default Footer
