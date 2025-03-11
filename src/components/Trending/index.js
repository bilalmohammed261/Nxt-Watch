import {FaFire} from 'react-icons/fa'
import SideBar from '../SideBar'
import Header from '../Header'
import AllTrendingVideos from '../AllTrendingVideos'
import WatchContext from '../../context/WatchContext'
import {TrendingContainer} from './styledComponents'

import './index.css'

const Trending = () => (
  <WatchContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <TrendingContainer data-testid="trending" isDark={isDark}>
          <Header />
          <div className="sidebar-banner-container">
            <SideBar />
            <div>
              <div className="trending-container">
                <div className="trending-heading-logo-container">
                  <FaFire size={40} className="icon" />
                  <h1>Trending</h1>
                </div>
                <AllTrendingVideos />
              </div>
            </div>
          </div>
        </TrendingContainer>
      )
    }}
  </WatchContext.Consumer>
)

export default Trending
