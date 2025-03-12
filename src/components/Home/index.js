import {Component} from 'react'
import {IoIosClose} from 'react-icons/io'
import SideBar from '../SideBar'
import Header from '../Header'
import AllVideos from '../AllVideos'
import WatchContext from '../../context/WatchContext'

import {HomeContainer, BannerContainer, CloseButton} from './styledComponents'

import './index.css'

class Home extends Component {
  state = {
    showBanner: true,
  }

  toggleShowBanner = () => {
    this.setState(prevState => ({showBanner: !prevState.showBanner}))
  }

  render() {
    const {showBanner} = this.state
    return (
      <WatchContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <HomeContainer data-testid="home" isDark={isDark}>
              <Header />
              <div className="sidebar-banner-container">
                <SideBar />
                <div className="home-banner-container ">
                  {showBanner && (
                    <BannerContainer
                      className="banner-container"
                      data-testid="banner"
                    >
                      <div className="image-icon-container">
                        <img
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                          className="website-logo"
                        />
                        <CloseButton
                          data-testid="close"
                          type="button"
                          onClick={this.toggleShowBanner}
                        >
                          <IoIosClose />
                        </CloseButton>
                      </div>
                      <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
                      <button type="button" className="get-it-btn">
                        GET IT NOW
                      </button>
                    </BannerContainer>
                  )}
                  <AllVideos />
                </div>
              </div>
            </HomeContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default Home
