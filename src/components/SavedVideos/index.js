import {FaFire} from 'react-icons/fa'

import SavedVideoItem from '../SavedVideoItem'
import SideBar from '../SideBar'
import Header from '../Header'
import WatchContext from '../../context/WatchContext'
import {SavedVideosContainer} from './styledComponents'
import './index.css'

const SavedVideos = () => (
  <WatchContext.Consumer>
    {value => {
      const {savedVideos, isDark} = value

      return (
        <SavedVideosContainer data-testid="savedVideos" isDark={isDark}>
          <Header />
          <div className="sidebar-banner-container">
            <SideBar />
            {savedVideos.length === 0 ? (
              <div className="saved-videos-list">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                  className="saved-img"
                />
                <h1>No saved videos found</h1>
                <p>You can save your videos while watching them</p>
              </div>
            ) : (
              <div>
                <div className="trending-container">
                  <div className="trending-heading-logo-container">
                    <FaFire size={40} className="icon" />
                    <h1>Saved Videos</h1>
                  </div>
                  <ul>
                    {savedVideos.map(video => (
                      <SavedVideoItem key={video.id} video={video} />
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </SavedVideosContainer>
      )
    }}
  </WatchContext.Consumer>
)

export default SavedVideos
