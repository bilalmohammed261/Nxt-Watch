import React from 'react'

const WatchContext = React.createContext({
  savedVideos: [],
  isDark: false,
  changeTheme: () => {},
  addToSavedVideos: () => {},
  removeFromSavedVideos: () => {},
})

export default WatchContext
