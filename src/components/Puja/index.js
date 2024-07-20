import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {FaArrowRight} from 'react-icons/fa'

import Header from '../Header'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Puja extends Component {
  state = {
    apiStatus: apiStatusConstants.failure,
  }

  renderSuccessView = () => (
    <>
      <img
        src="https://res.cloudinary.com/dy5es3bf4/image/upload/v1721448512/uwn3txwaakjpbjxztbnr.png"
        className="images"
      />
      <img
        src="https://res.cloudinary.com/dy5es3bf4/image/upload/v1721448518/sq6y4ovnyemzt44usutm.png"
        className="images"
      />
      <div className="puja-seeva-items-cont">
        <div className="puja-seeva-item">
          <img
            src="https://res.cloudinary.com/dy5es3bf4/image/upload/v1721444503/ge7ca8ntxysgwvdpconk.png"
            className="images"
          />
          <button className="participate-btn">
            PARTICIPATE{' '}
            <span className="arrow-icon">
              <FaArrowRight />
            </span>
          </button>
        </div>

        <div className="puja-seeva-item">
          <img
            src="https://res.cloudinary.com/dy5es3bf4/image/upload/v1721444512/hs58oq1gpe3ft39kydwn.png"
            className="images"
          />
          <button className="participate-btn">
            PARTICIPATE{' '}
            <span className="arrow-icon">
              <FaArrowRight />
            </span>
          </button>
        </div>

        <div className="puja-seeva-item">
          <img
            src="https://res.cloudinary.com/dy5es3bf4/image/upload/v1721444522/gac9ob5ahbhm3iycc7j0.png"
            className="images"
          />
          <button className="participate-btn">
            <Link to="/poojapackages">
              PARTICIPATE{' '}
              <span className="arrow-icon">
                <FaArrowRight />
              </span>
            </Link>
          </button>
        </div>
      </div>
    </>
  )

  onClickBookPooja = () => {
    this.setState({apiStatus: apiStatusConstants.success})
  }

  renderLoadingView = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <div className="failure-view-cont">
      <img
        src="https://res.cloudinary.com/dy5es3bf4/image/upload/v1721449849/zbafitlmr8pnikjtootd.png"
        className="failure-image"
      />
      <button
        type="button"
        className="book-pooja-btn"
        onClick={this.onClickBookPooja}
      >
        Book Pooja Now
      </button>
    </div>
  )

  renderPujaPage = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="home-bg-cont">
        <Header />
        {this.renderPujaPage()}
      </div>
    )
  }
}

export default Puja
