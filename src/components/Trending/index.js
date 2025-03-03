import {IoIosClose} from 'react-icons/io'
import SideBar from '../SideBar'
import Header from '../Header'
import AllTrendingVideos from '../AllTrendingVideos'

import './index.css'

const Trending = () => (
  <div data-testid="trending">
    <Header />
    <div className="sidebar-banner-container">
      <SideBar />
      <div className="home-banner-container">
        <div className="banner-container">
          <div className="image-icon-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
              className="website-logo"
            />
            <button data-testid="close" type="button">
              <IoIosClose />
            </button>
          </div>
          <p>
            Buy Nxt Watch Premium prepaid plans with
            <br /> UPI
          </p>
          <button type="button" className="get-it-btn">
            GET IT NOW
          </button>
        </div>

        <AllTrendingVideos />
      </div>
    </div>
  </div>
)

export default Trending
