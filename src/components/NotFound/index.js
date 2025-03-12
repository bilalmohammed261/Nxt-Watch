import Header from '../Header'
import SideBar from '../SideBar'
import './index.css'

const NotFound = () => (
  <>
    <Header />
    <div className="sidebar-not-found-container">
      <SideBar />
      <div className="not-found-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
          alt="not found"
          className="not-found-img"
        />
        <h1>Page Not Found</h1>
        <p>we are sorry, the page you requested could not be found.</p>
      </div>
    </div>
  </>
)

export default NotFound
