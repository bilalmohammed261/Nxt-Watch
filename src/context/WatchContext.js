import React from 'react'

const WatchContext = React.createContext({
  savedVideos: [],
  isDark: false,
  changeTheme: () => {},
  addToSavedVideos: () => {},
})

export default WatchContext
