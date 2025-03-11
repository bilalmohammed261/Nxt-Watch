import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetailsRoute from './components/VideoItemDetailsRoute'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import WatchContext from './context/WatchContext'

import './App.css'

// Replace your code here

class App extends Component {
  state = {
    isDark: false,
    savedVideos: [],
  }

  changeTheme = () => {
    this.setState(prevState => ({
      isDark: !prevState.isDark,
    }))
  }

  addToSavedVideos = videoData => {
    this.setState(prevState => ({
      savedVideos: [...prevState.savedVideos, videoData],
    }))
  }

  render() {
    const {isDark, savedVideos} = this.state
    return (
      <WatchContext.Provider
        value={{
          isDark,
          changeTheme: this.changeTheme,
          savedVideos,
          addToSavedVideos: this.addToSavedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/trending" component={Trending} />
          <Route exact path="/gaming" component={Gaming} />
          <Route exact path="/videos/:id" component={VideoItemDetailsRoute} />
          <Route exact path="/saved-videos" component={SavedVideos} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </WatchContext.Provider>
    )
  }
}

export default App
