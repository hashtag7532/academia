import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import "./Header.css";

function Header() {
  return (
    <div className="header">
        <div className="logo">
            <h1>ACADEMIA</h1>
            <span>ONLINE EDUCATION AND LEARNING</span>
        </div>
        <div className="social-media">
          <FontAwesomeIcon icon={faFacebook} className="icon"/>
          <FontAwesomeIcon icon={faTwitter} className="icon"/>
          <FontAwesomeIcon icon={faInstagram} className="icon"/>
          <FontAwesomeIcon icon={faYoutube} className="icon"/>
        </div>
    </div>
  )
}

export default Header;