import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {useState} from 'react'

import {FaUser, FaInfoCircle} from 'react-icons/fa'
import {
  IoMdListBox,
  IoIosArrowForward,
  IoIosCall,
  IoLogoWhatsapp,
} from 'react-icons/io'

import {SiGmail} from 'react-icons/si'

import './index.css'

const Header = () => {
  const [activeTab, setActiveTab] = useState('Home')

  const onClickHome = () => {
    setActiveTab('Home')
  }

  const onClickPuja = () => {
    setActiveTab('Puja')
  }

  const isActive = activeTab

  const overlayStyles = {
    backgroundColor: '#ffff',
  }

  return (
    <nav className="nav-header">
      <img
        src="https://res.cloudinary.com/dy5es3bf4/image/upload/v1721394163/zowxyulhpy0j6pxalf6y.svg"
        className="app-logo"
      />
      <div className="nav-links-container">
        <button className="nav-btn" onClick={onClickHome}>
          <Link
            to="/"
            className={`nav-link ${activeTab === 'Home' ? 'active' : ''}`}
          >
            Home
          </Link>
        </button>

        <button className="nav-btn" onClick={onClickPuja}>
          <Link
            to="/Puja"
            className={`nav-link ${activeTab === 'Puja' ? 'active' : ''}`}
          >
            Puja
          </Link>
        </button>

        <p className="nav-link">Panchang</p>
        <p className="nav-link">Temples</p>
        <p className="nav-link">Library</p>
      </div>
      <div className="language-profile-btns-container">
        <select className="language-drop-down">
          <option>English</option>
          <option>Hindi</option>
        </select>
        <div className="popup-container">
          <Popup
            trigger={
              <button type="button" className="profile-btn drop-down:none">
                <FaUser className="profile" />
              </button>
            }
            position="bottom left"
          >
            <div className="popup-container">
              <div className="wishing-container">
                <p className="text">Hello, Sri Mandir Bhakt</p>
                <p className="text">Welcome to Sri Mandir Puja Seva</p>
              </div>
              <hr className="hr-line" />
              <div className="side-bar-btns-container">
                <p>Account Details</p>
                <button type="button" className="side-bar-btn">
                  <div>
                    <FaUser className="sidebar-icons" />
                    <span className="btn-name">My Profile</span>
                  </div>
                  <div>
                    <IoIosArrowForward className="sidebar-arrow-icon" />
                  </div>
                </button>
                <button type="button" className="side-bar-btn">
                  <div>
                    <IoMdListBox className="sidebar-icons" />
                    <Link
                      to="/puja"
                      className="btn-name"
                      value="Puja"
                      onClick={onClickPuja}
                    >
                      My Puja Bookings
                    </Link>
                  </div>
                  <div>
                    <IoIosArrowForward className="sidebar-arrow-icon" />
                  </div>
                </button>
                <button type="button" className="side-bar-btn">
                  <div>
                    <IoMdListBox className="sidebar-icons" />
                    <span className="btn-name">My Ramotsav Bookings</span>
                  </div>
                  <div>
                    <IoIosArrowForward className="sidebar-arrow-icon" />
                  </div>
                </button>
              </div>
              <hr className="hr-line" />
              <div className="side-bar-btns-container">
                <p className="text">Welcome to Sri Mandir Puja Seva</p>
                <button type="button" className="side-bar-btn">
                  <div>
                    <FaInfoCircle className="sidebar-icons" />
                    <span className="btn-name">How Puja Seva Works?</span>
                  </div>
                  <div>
                    <IoIosArrowForward className="sidebar-arrow-icon" />
                  </div>
                </button>
              </div>
              <hr className="hr-line" />
              <div className="side-bar-btns-container">
                <p className="text">Help & Support for Puja Booking</p>
                <button type="button" className="contact-details-btn">
                  <div>
                    <IoIosCall className="phone-icon" />
                  </div>
                  <div className="contact-details">
                    <p className="contact-number">080-711-74417</p>
                    <p className="contact-time">
                      You can call us from 10:30 AM - 7:30PM
                    </p>
                  </div>
                </button>
                <div className="email-wt-btns-cont">
                  <button type="button" className="email-wt-btns">
                    <div>
                      <SiGmail className="phone-icon" />
                    </div>
                    <div className="contact-details">
                      <p className="contact-number">Email us</p>
                    </div>
                  </button>
                  <button type="button" className="email-wt-btns">
                    <div>
                      <IoLogoWhatsapp className="phone-icon" />
                    </div>
                    <div className="contact-details">
                      <p className="contact-number">Whatsapp us</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </Popup>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header)
