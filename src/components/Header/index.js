import {Link} from 'react-router-dom'
import {BsMoon} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <header className="header-container">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="website logo"
        className="website-logo"
      />
    </Link>

    <div className="header-sub-container">
      <button type="button" className="theme-button">
        <BsMoon />
      </button>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
        alt="profile"
        className="profile-img"
      />

      <button type="button" className="logout-button">
        Logout
      </button>
    </div>
  </header>
)

export default Header
