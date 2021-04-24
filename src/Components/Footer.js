import React from 'react';
import Navbar from '../Components/NavBar';
import '../Css/footer.css';

const Footer = () => {
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
          <img src={'https://mutify.app/images/mutify-logo-6ab64e5ad7.png'} width={60} height={60} alt="logo" />
          <span className="brandName"> MUTIFY</span>
        </div>
        <div className="footerCopyrightText">Made by <a  rel="noopener noreferrer" href="https://github.com/Hassan-Naeem-code" target="_blank">Muhammad Hassan Naeem</a>– Web & Mobile Developer. © 2021 All right reserved</div>
      </div>
    </footer>
  );
}
export default Footer;