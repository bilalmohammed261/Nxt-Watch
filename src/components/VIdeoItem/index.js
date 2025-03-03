// import ReactPlayer from 'react-player'
import {formatDistanceToNowStrict} from 'date-fns'
import './index.css'

const VideoItem = props => {
  const {video} = props
  const {thumbnailUrl, viewCount, channel, title, publishedAt} = video
  const {name, profileImageUrl} = channel
  const dateObject = Date.parse(publishedAt, 'MMM dd, yyyy')
  const result = formatDistanceToNowStrict(dateObject)

  return (
    <li className="video-container">
      <img src={thumbnailUrl} alt=" video thumbnail" />

      <div className="profile-container">
        <img src={profileImageUrl} alt="channel logo" className="channel-img" />
        <div className="title-name-container">
          <p>{title}</p>
          <p>{name}</p>
          <div className="views-published-container">
            <p>{viewCount} views </p>
            <p> . {result} ago</p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default VideoItem
