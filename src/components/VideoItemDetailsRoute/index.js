import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {formatDistanceToNowStrict} from 'date-fns'

import {BiLike, BiDislike} from 'react-icons/bi'
import {RiPlayListAddLine} from 'react-icons/ri'
import Header from '../Header'
import SideBar from '../SideBar'
import WatchContext from '../../context/WatchContext'
import {VideoDetailsContainer} from './styledComponents'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetailsRoute extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoData: {},
    isLiked: false,
    isDisLiked: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  onRetry = () => {
    this.getVideoItemDetails()
  }

  getFormattedData = data => ({
    id: data.id,
    title: data.title,
    videoUrl: data.video_url,
    thumbnailUrl: data.thumbnail_url,
    channel: {
      name: data.channel.name,
      profileImageUrl: data.channel.profile_image_url,
      subscriberCount: data.channel.subscriber_count,
    },
    viewCount: data.view_count,
    publishedAt: data.published_at,
    description: data.description,
  })

  getVideoItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const videoItemDetailsApiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const response = await fetch(videoItemDetailsApiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const formattedData = this.getFormattedData(data.video_details)
      this.setState({
        apiStatus: apiStatusConstants.success,
        videoData: formattedData,
      })
    }
    if (response.status === 404) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }

    // console.log(data)
    //  const updatedData = data.video_details
  }

  likeVideo = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisLiked: false,
    }))
  }

  dislikeVideo = () => {
    this.setState(prevState => ({
      isDisLiked: !prevState.isDisLiked,
      isLiked: false,
    }))
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <div className="failure-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We are having some trouble to complete your request.</p>
      <p>Please try again.</p>
      <button type="button" onClick={this.onRetry}>
        Retry
      </button>
    </div>
  )

  renderSuccessView = () => (
    <WatchContext.Consumer>
      {value => {
        const {addToSavedVideos} = value

        const {videoData, isLiked, isDisLiked, isSaved} = this.state
        const btnLike = isLiked ? 'btn btn-bg-color' : 'btn'
        const btnDisLike = isDisLiked ? 'btn btn-bg-color' : 'btn'
        const btnSave = isSaved ? 'btn btn-bg-color' : 'btn'
        const saveText = isSaved ? 'Saved' : 'Save'

        const saveVideo = () => {
          this.setState(prevState => ({
            isSaved: !prevState.isSaved,
          }))
          addToSavedVideos(videoData)
        }

        // console.log(videoData)
        const {
          videoUrl,
          title,
          publishedAt,
          viewCount,
          channel,
          description,
        } = videoData
        const {name, profileImageUrl, subscriberCount} = channel
        const dateObject = Date.parse(publishedAt, 'MMM dd, yyyy')
        const result = formatDistanceToNowStrict(dateObject)
        return (
          <div>
            <ReactPlayer url={videoUrl} />
            <h1 className="title">{title}</h1>
            <div className="views-published-buttons-container">
              <div className="views-date">
                <p>{viewCount} views </p>
                <p>. {result} ago</p>
              </div>
              <div>
                <button
                  type="button"
                  onClick={this.likeVideo}
                  className={btnLike}
                >
                  <BiLike /> Like
                </button>
                <button
                  type="button"
                  onClick={this.dislikeVideo}
                  className={btnDisLike}
                >
                  <BiDislike /> DisLike
                </button>
                <button type="button" className={btnSave} onClick={saveVideo}>
                  <RiPlayListAddLine /> {saveText}
                </button>
              </div>
            </div>
            <hr className="line" />
            <div className="channel-details">
              <img
                src={profileImageUrl}
                alt="channel logo"
                className="channel-img"
              />
              <div className="channel-subscribers">
                <p>{name}</p>
                <p>{subscriberCount}</p>
                <p>{description}</p>
              </div>
            </div>
          </div>
        )
      }}
    </WatchContext.Consumer>
  )

  renderVideoItemDetails = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()

      default:
        return null
    }
  }

  render() {
    return (
      <WatchContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <VideoDetailsContainer
              data-testid="videoItemDetails"
              isDark={isDark}
            >
              <Header />
              <div className="sidebar-banner-container">
                <SideBar />

                {this.renderVideoItemDetails()}
              </div>
            </VideoDetailsContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default VideoItemDetailsRoute
