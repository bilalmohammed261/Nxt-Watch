import {IoMdHome} from 'react-icons/io'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {RiPlayListAddLine} from 'react-icons/ri'

import './index.css'

const SideBar = () => (
  <div className="navbar-footer-container">
    <nav>
      <ul>
        <li>
          <IoMdHome />
          <span>Home</span>
        </li>
        <li>
          <FaFire />
          <span>Trending</span>
        </li>
        <li>
          <SiYoutubegaming />
          <span>Gaming</span>
        </li>

        <li>
          <RiPlayListAddLine />
          <span>Saved videos</span>
        </li>
      </ul>
    </nav>

    <div className="footer">
      <h1>CONTACT US</h1>
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
      <p>
        Enjoy! Now to see your
        <br />
        channels and <br /> recommendations!
      </p>
    </div>
  </div>
)

export default SideBar
