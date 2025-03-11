import {SiYoutubegaming} from 'react-icons/si'
import SideBar from '../SideBar'
import Header from '../Header'
import AllGamingVideos from '../AllGamingVideos'
import WatchContext from '../../context/WatchContext'
import {GamingContainer} from './styledComponents'

import './index.css'

const Gaming = () => (
  <WatchContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <GamingContainer data-testid="gaming" isDark={isDark}>
          <Header />
          <div className="sidebar-banner-container">
            <SideBar />
            <div>
              <div className="trending-container">
                <div className="trending-heading-logo-container">
                  <SiYoutubegaming size={40} className="icon" />
                  <h1>Gaming</h1>
                </div>
                <AllGamingVideos />
              </div>
            </div>
          </div>
        </GamingContainer>
      )
    }}
  </WatchContext.Consumer>
)

export default Gaming
