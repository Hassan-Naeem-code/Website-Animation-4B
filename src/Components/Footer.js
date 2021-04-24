import React from 'react';

import '../Css/index.css';

import Navbar from '../components/NavBar';
import Logo from '../assets/logo.png';

export default Footer = () => {
  return (
    <footer className="footerWrapper">
      <div className="footerContainer">
        <div className="footerFeedbackWrapper">
          <h2 className="footerTitleText">Have an Idea or Feedback?</h2>
          <span className="footerSubtitleText">help@mutify.app</span>
          <video src="https://mutify.app/videos/wave-white@1x.mp4" muted autoPlay loop className="footerVideo"></video>
        </div>
        <div className="footerNav">
          <Navbar />
        </div>
        <div className="footerLogoWrapper">
          <img src={Logo} width={60} height={60} alt="logo" />
          <span className="brandName"> MUTIFY</span>
        </div>
        <div className="footerCopyrightText">Made by <a  rel="noopener noreferrer" href="https://github.com/shahzaib1999" target="_blank">M.Shahzaib</a>– Web & Mobile Developer. © 2020 All right reserved</div>
      </div>
    </footer>
  );
}