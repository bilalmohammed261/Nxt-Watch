import {Link} from 'react-router-dom'
import './index.css'

const GamingVideoItem = props => {
  const {video} = props
  const {thumbnailUrl, viewCount, title, id} = video

  return (
    <li className="video-container">
      <Link to={`/videos/${id}`}>
        <img src={thumbnailUrl} alt=" video thumbnail" />

        <p>{title}</p>

        <p>{viewCount} Watching Worldwide</p>
      </Link>
    </li>
  )
}

export default GamingVideoItem
