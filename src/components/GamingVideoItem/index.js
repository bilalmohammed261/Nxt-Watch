import './index.css'

const VideoItem = props => {
  const {video} = props
  const {thumbnailUrl, viewCount, title} = video

  return (
    <li className="video-container">
      <img src={thumbnailUrl} alt=" video thumbnail" />

      <p>{title}</p>

      <p>{viewCount} Watching Worldwide</p>
    </li>
  )
}

export default VideoItem
