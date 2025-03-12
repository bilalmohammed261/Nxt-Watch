import {formatDistanceToNowStrict} from 'date-fns'
import {Link} from 'react-router-dom'
import './index.css'

const SavedVideoItem = props => {
  const {video} = props
  const {thumbnailUrl, title, channel, viewCount, publishedAt, id} = video
  const {name} = channel
  const dateObject = Date.parse(publishedAt, 'MMM dd, yyyy')
  const result = formatDistanceToNowStrict(dateObject)
  // console.log(video)

  return (
    <Link to={`/videos/${id}`}>
      <li className="saved-video-item">
        <img src={thumbnailUrl} alt="video thumbnail" />
        <div>
          <p>{title}</p>
          <p>{name}</p>
          <div className="views-date-container">
            <p>{viewCount}</p>
            <p>{result} ago</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default SavedVideoItem
