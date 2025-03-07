import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {BsMoon} from 'react-icons/bs'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.push('/login')
  }
  return (
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

        <button type="button" className="logout-button" onClick={onClickLogout}>
          Logout
        </button>
      </div>
    </header>
  )
}

export default withRouter(Header)
