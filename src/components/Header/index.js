import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {IoSearchOutline} from 'react-icons/io5'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <h1 className="app-name">Keep Notes</h1>
      <div className="search-input-bg-container">
        <IoSearchOutline className="search-icon" />
        <input type="search" className="search-input" placeholder="Search" />
      </div>

      <div className="nav-bar-large-container">
        <button
          type="button"
          className="logout-desktop-btn"
          onClick={onClickLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  )
}

export default withRouter(Header)
