import React, { useState, useEffect } from 'react';
import Logo from '../../assets/images/full-new-logo-tp-bg.png';
import './style.css';
import './bootstrap-icons/bootstrap-icons.css';

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const UnderConstruction: React.FC = () => {
  const [countdownTime, setCountdownTime] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countDate = new Date('2023/06/30').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const timeleft = countDate - now;

      const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

      setCountdownTime({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <header id='header' className='d-flex align-items-center'>
        <div className='container d-flex flex-column align-items-center'>
          <img src={Logo} className='pb-3' alt='Logo' />
          <h2>
            We're working hard to improve our website and we'll be ready to
            launch soon.
          </h2>
          <div className='countdown d-flex justify-content-center'>
            <div>
              <h3>{countdownTime.days}</h3>
              <h4>Days</h4>
            </div>
            <div>
              <h3>{countdownTime.hours}</h3>
              <h4>Hours</h4>
            </div>
            <div>
              <h3>{countdownTime.minutes}</h3>
              <h4>Minutes</h4>
            </div>
            <div>
              <h3>{countdownTime.seconds}</h3>
              <h4>Seconds</h4>
            </div>
          </div>
          <div className='social-links text-center'>
            <a href='https://twitter.com/Informalcodelab' className='twitter'>
              <i className='bi bi-twitter'></i>
            </a>
            <a href='https://facebook.com/informalcode' className='facebook'>
              <i className='bi bi-facebook'></i>
            </a>
            <a
              href='https://www.linkedin.com/company/informalcode/'
              className='linkedin'
            >
              <i className='bi bi-linkedin'></i>
            </a>
            <a href='mailto:informalcodemail@gmail.com' className='mail'>
              <i className='bi bi-envelope-at-fill'></i>
            </a>
          </div>
        </div>
      </header>
      <footer id='footer'>
        <div className='container'>
          <div className='copyright'>
            &copy; {new Date().getFullYear()} Informalcode Online. All Rights
            Reserved
          </div>
          <div className='credits'>Designed by Informalcode</div>
        </div>
      </footer>
    </>
  );
};

export default UnderConstruction;
