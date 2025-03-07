// import ReactPlayer from 'react-player'
import {formatDistanceToNowStrict} from 'date-fns'
import {Link} from 'react-router-dom'
import './index.css'

const VideoItem = props => {
  const {video} = props
  const {thumbnailUrl, viewCount, channel, title, publishedAt, id} = video
  const {name, profileImageUrl} = channel
  const dateObject = Date.parse(publishedAt, 'MMM dd, yyyy')
  const result = formatDistanceToNowStrict(dateObject)

  return (
    <li className="video-container">
      <Link to={`/videos/${id}`}>
        <img src={thumbnailUrl} alt=" video thumbnail" />

        <div className="profile-container">
          <img
            src={profileImageUrl}
            alt="channel logo"
            className="channel-img"
          />
          <div className="title-name-container">
            <p>{title}</p>
            <p>{name}</p>
            <div className="views-published-container">
              <p>{viewCount} views </p>
              <p> . {result} ago</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default VideoItem
