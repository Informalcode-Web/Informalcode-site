//todo
import React from 'react'
import Logo from '../assets/images/InformalCode-title-Logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer id="page-footer bg-light d-flex" className="mt-5">
      <div className="web-footer px-5 mb-3">
          <a><img src={Logo} width="25" height="25"/></a>
          <span className="ms-3">
            {`\u00A9`} 2023 Informalcodes Online. All rights reserved.
          </span>
          
      </div>
      <div>
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
      </div>
    </footer>

    
  );
};

export default Footer;