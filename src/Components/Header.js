import React from 'react';
import '../Css/index.css';
import Logo from '../Assets/logo.png';

const Header = () => {
    return (
        <React.Fragment>
            <div className='header'>
              <div className="header-layout">
                 <div className="container navbar">
                     <nav className="pt-2">
                         <nav className="navbar navbar-expand-lg navbar-light"></nav>
                         <nav class="navbar navbar-expand-lg navbar-light">
                           <a href="/" class="navbar-brand">
                             <img src={Logo} width="60" height="60" alt="logo" />
                               <span class="brandName"> MUTIFY</span>
                            </a>
                            <button type="button" aria-label="Toggle navigation" className="navbar-toggler collapsed">
                              <span className="navbar-toggler-icon"></span>
                            </button>
                        <div className="justify-content-center navbarLink navbar-collapse collapse" id="responsive-navbar-nav">
                            <div className="navbar-nav">
                              <li className="navLink nav-link">Works With</li>
                              <li className="navLink nav-link">Noise Level</li>
                              <li className="navLink nav-link">Noise Level</li>
                              <li className="navLink nav-link">Noise Level</li>
                              <li className="navLink nav-link">Noise Level</li>
                              <li className="navLink nav-link">Noise Level</li>
                              <li className="navLink nav-link">Switch Device</li>
                              <li className="navLink nav-link">Switch Device</li>
                              <li className="navLink nav-link">Switch Device</li>
                              <li className="navLink nav-link">Switch Device</li>
                              <li className="navLink nav-link">Feedback</li>
                              <li className="navLink nav-link">Feedback</li>
                              <li className="navLink nav-link">Feedback</li>
                              <li className="navLink nav-link">Feedback</li>
                              <li className="navLink nav-link">Feedback</li>
                            </div>
                        </div>
                        <div className="justify-content-end navbar-collapse collapse" id="responsive-navbar-nav">
                            <div className="navbar-nav">
                               <li className="navLink nav-link">
                                 <button type="button" className="downloadBtn btn btn-primary">Download</button>
                                 <button type="button" className="downloadBtn btn btn-primary">Download</button>
                                 <button type="button" className="downloadBtn btn btn-primary">Download</button>
                                </li>
                            </div>
                        </div>
                     </nav>
                     </nav>
                 </div>
                 <div className="area-after-navbar"></div>
              </div>
            </div>
        </React.Fragment>
    )
}


export default Header;