import {SiYoutubegaming} from 'react-icons/si'
import SideBar from '../SideBar'
import Header from '../Header'
import AllGamingVideos from '../AllGamingVideos'

import './index.css'

const Gaming = () => (
  <div data-testid="gaming">
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
  </div>
)

export default Gaming
