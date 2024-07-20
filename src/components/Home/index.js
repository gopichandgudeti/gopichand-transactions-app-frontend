import {FaArrowRight} from 'react-icons/fa'

import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-bg-cont">
      <img
        src="https://res.cloudinary.com/dy5es3bf4/image/upload/v1721444188/rf2shch2ale5xxfcaoro.png"
        className="images"
      />
      <img
        src="https://res.cloudinary.com/dy5es3bf4/image/upload/v1721444291/vrrvngm6otoki92dop05.png"
        className="images"
      />
      <img
        src="https://res.cloudinary.com/dy5es3bf4/image/upload/v1721444384/ugaldfby92iypy4qrunu.png"
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
            PARTICIPATE{' '}
            <span className="arrow-icon">
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  </>
)

export default Home
