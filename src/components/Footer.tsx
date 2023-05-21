//todo
import React from 'react'
import Logo from '../images/InformalCode-title-Logo.png'

const Footer: React.FC = () => {
  return (
    <footer id="page-footer" className="mt-5">
      <div className="web-footer px-5 mb-3">
        <a><img src={Logo} width="25" height="25"/></a>
        <span className="ms-3">
          {`\u00A9`} 2023 Informalcodes Online. All rights reserved.
        </span>
      </div>
    </footer>

    
  );
};

export default Footer;