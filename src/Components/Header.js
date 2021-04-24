import React from 'react'
import { Button } from 'react-bootstrap';
import NavBar from './NavBar';
import VideoImg from '../assets/video.jpg';
import '../Css/header.css';

const Header = () => {
  return (
    <div className="headerWrapper">
      <div className="backgroundColor">
        <NavBar />
        <div className="headerTitleWrapper">
          <div>
            <span className="titleText">
              Mutify for Mac
          </span>
          </div>
          <div className="mt-3">
            <span className="subTitleText">
              Use a shortcut or the touch bar on any Mac device <br /> to quickly mute your microphone
            </span>
          </div>
          <div className="btnWrapper">
            <Button className="headerDownloadBtn">Download</Button>
            <Button className="headerBuyBtn">Buy: $4.99</Button>
          </div>
        </div>
      </div>
      <div className="videoWrapper">
        <video src='http://website-animation-1999.surge.sh/static/media/headerVideo.19c8a940.mp4' poster={VideoImg} autoPlay loop data-video="0" className="video"></video>
        <img src={VideoImg} className="videoImg" alt="videoImg" />
        <div>
          <img src="https://mutify.app/images/wave-1-ddc3a23018.svg" className="videoBgImg" alt="videoBgImg" />
        </div>
      </div>
    </div>
  )
}
export default Header;