import { Link } from "react-router-dom"

const Footer = ({ toggleEmoji, anger }) => {

  return (
    <footer>
      <span id="footer-face" onClick={toggleEmoji}>{anger}</span>
      <Link to="/" id="footer-logo">&nbsp;iRate</Link>
    </footer>
  )
}

export default Footer
