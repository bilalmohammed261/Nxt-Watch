import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'

import WatchContext from '../../context/WatchContext'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <WatchContext.Consumer>
      {value => {
        const {isDark, changeTheme} = value
        const logoUrl = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        const onChangeTheme = () => {
          changeTheme()
        }
        return (
          <header className="header-container">
            <Link to="/">
              <img src={logoUrl} alt="website logo" className="website-logo" />
            </Link>

            <div className="header-sub-container">
              <button
                type="button"
                className="theme-button"
                onClick={onChangeTheme}
                data-testid="theme"
              >
                {isDark ? <BsBrightnessHigh /> : <BsMoon />}
              </button>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
                className="profile-img"
              />

              <Popup
                modal
                trigger={
                  <button type="button" className="logout-button">
                    Logout
                  </button>
                }
              >
                {close => (
                  <div>
                    <p>Are you sure, you want to logout</p>
                    <button type="button" onClick={() => close()}>
                      Cancel
                    </button>
                    <button type="button" onClick={onClickLogout}>
                      Confirm
                    </button>
                  </div>
                )}
              </Popup>
            </div>
          </header>
        )
      }}
    </WatchContext.Consumer>
  )
}

export default withRouter(Header)
