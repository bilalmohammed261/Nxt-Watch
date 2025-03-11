import {IoIosClose} from 'react-icons/io'
import SideBar from '../SideBar'
import Header from '../Header'
import AllVideos from '../AllVideos'
import WatchContext from '../../context/WatchContext'

import {HomeContainer} from './styledComponents'

import './index.css'

const Home = () => (
  <WatchContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <HomeContainer data-testid="home" isDark={isDark}>
          <Header />
          <div className="sidebar-banner-container">
            <SideBar />
            <div className="home-banner-container ">
              <div className="banner-container" data-testid="banner">
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

              <AllVideos />
            </div>
          </div>
        </HomeContainer>
      )
    }}
  </WatchContext.Consumer>
)

export default Home
