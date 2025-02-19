// import {CiDark} from 'react-icons/ci'

const Header = () => (
  <>
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="website logo"
      />
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
          alt="profile"
        />
        {/* <CiDark /> trying to add light theme here */}
        <button type="button">Logout</button>
      </div>
    </div>
  </>
)

export default Header
