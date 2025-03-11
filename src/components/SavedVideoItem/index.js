import {formatDistanceToNowStrict} from 'date-fns'
import './index.css'

const SavedVideoItem = props => {
  const {video} = props
  const {thumbnailUrl, title, channel, viewCount, publishedAt} = video
  const {name} = channel
  const dateObject = Date.parse(publishedAt, 'MMM dd, yyyy')
  const result = formatDistanceToNowStrict(dateObject)
  // console.log(video)

  return (
    <li className="saved-video-item">
      <img src={thumbnailUrl} alt="video thumbnail" />
      <div>
        <h1>{title}</h1>
        <p>{name}</p>
        <div className="views-date-container">
          <p>{viewCount}</p>
          <p>{result} ago</p>
        </div>
      </div>
    </li>
  )
}

export default SavedVideoItem
