import React from 'react';
import Logo from '../images/full-new-logo-tp-bg.png';

const UnderConstruction = () => {
  return (
    <>
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex flex-column align-items-center">
            <img src={Logo} className='pb-3' alt='Logo' />
          <h2>We're working hard to improve our website and we'll be ready to launch soon.</h2>
          <div className="countdown d-flex justify-content-center" data-count="2023/12/3">
            <div>
              <h3>%d</h3>
              <h4>Days</h4>
            </div>
            <div>
              <h3>%h</h3>
              <h4>Hours</h4>
            </div>
            <div>
              <h3>%m</h3>
              <h4>Minutes</h4>
            </div>
            <div>
              <h3>%s</h3>
              <h4>Seconds</h4>
            </div>
          </div>
          <div className="social-links text-center">
            <a href="https://twitter.com/Informalcodelab" className="twitter"><i className="bi bi-twitter"></i></a>
            <a href="https://facebook.com/informalcode" className="facebook"><i className="bi bi-facebook"></i></a>
            <a href="https://www.linkedin.com/company/informalcode/" className="linkedin"><i className="bi bi-linkedin"></i></a>
            <a href="mailto:informalcodemail@gmail.com" className="mail"><i className="bi bi-envelope-at-fill"></i></a>
          </div>
        </div>
      </header>
      <footer id="footer">
        <div className="container">
          <div className="copyright">
            &copy; {new Date().getFullYear()} Informalcode Online. All Rights Reserved
          </div>
          <div className="credits">
            Designed by Informalcode
          </div>
        </div>
      </footer>
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
    </>
  );
};

export default UnderConstruction;
