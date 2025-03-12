import {IoMdHome} from 'react-icons/io'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {RiPlayListAddLine} from 'react-icons/ri'
import {Link} from 'react-router-dom'

import './index.css'

const SideBar = () => (
  <div className="navbar-footer-container">
    <nav>
      <ul>
        <Link to="/" className="no-underline">
          <li>
            <IoMdHome />
            <span>Home</span>
          </li>
        </Link>
        <Link to="/trending" className="no-underline">
          <li>
            <FaFire />
            <span>Trending</span>
          </li>
        </Link>
        <Link to="/gaming" className="no-underline">
          <li>
            <SiYoutubegaming />
            <span>Gaming</span>
          </li>
        </Link>
        <Link to="/saved-videos" className="no-underline">
          <li>
            <RiPlayListAddLine />
            <span>Saved videos</span>
          </li>
        </Link>
      </ul>
    </nav>

    <footer className="footer">
      <p>CONTACT US</p>
      <div className="social-media-icons-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
          alt="facebook logo"
          className="social-media-icon"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
          alt="twitter  logo"
          className="social-media-icon"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
          alt=" linked in logo"
          className="social-media-icon"
        />
      </div>
      <p>Enjoy! Now to see your channels and recommendations!</p>
    </footer>
  </div>
)

export default SideBar
