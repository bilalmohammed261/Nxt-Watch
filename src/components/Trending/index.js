import {FaFire} from 'react-icons/fa'
import SideBar from '../SideBar'
import Header from '../Header'
import AllTrendingVideos from '../AllTrendingVideos'

import './index.css'

const Trending = () => (
  <div data-testid="trending">
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
  </div>
)

export default Trending
