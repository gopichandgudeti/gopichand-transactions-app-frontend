import {FaArrowRight} from 'react-icons/fa'

import './index.css'

import Header from '../Header'

const PoojaPackages = () => {
  return (
    <div className="home-bg-cont">
      <Header />
      <img
        src="https://res.cloudinary.com/dy5es3bf4/image/upload/v1721472931/grlqh8fhvlbzl0f2e9jf.png"
        className="path-image"
      />
      <div className="pooja-details-bg-cont">
        <img
          src="https://res.cloudinary.com/dy5es3bf4/image/upload/v1721473731/mcdzzzqbu22ywbmdb2uf.png"
          className="pooja-image"
        />
        <div className="pooja-description">
          <img
            src="https://res.cloudinary.com/dy5es3bf4/image/upload/v1721473734/tvni8datdhkejlbmxgd8.png"
            className="pooja-description-image"
          />
          <button className="select-pooja-package-btn">
            Select puja package
            <span className="arrow-icon">
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
      <div className="packages-bg-container">
        <div className="package-container">
          <img
            src="https://res.cloudinary.com/dy5es3bf4/image/upload/v1721475705/ycmjde6u0x0f61lulo5v.png"
            className="package-image"
          />
          <button className="participate-btn">
            Participate
            <span className="arrow-icon">
              <FaArrowRight />
            </span>
          </button>
        </div>
        <div className="package-container">
          <img
            src="https://res.cloudinary.com/dy5es3bf4/image/upload/v1721475717/iyp6pzutctdsvrycpndw.png"
            className="package-image"
          />
          <button className="participate-btn">
            Participate
            <span className="arrow-icon">
              <FaArrowRight />
            </span>
          </button>
        </div>
        <div className="package-container">
          <img
            src="https://res.cloudinary.com/dy5es3bf4/image/upload/v1721475716/iiift98pkimre9ti2zhj.png"
            className="package-image"
          />
          <button className="participate-btn">
            Participate
            <span className="arrow-icon">
              <FaArrowRight />
            </span>
          </button>
        </div>
        <div className="package-container">
          <img
            src="https://res.cloudinary.com/dy5es3bf4/image/upload/v1721475716/cnvgc109raovqj1wupkd.png"
            className="package-image"
          />
          <button className="participate-btn">
            Participate
            <span className="arrow-icon">
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default PoojaPackages
