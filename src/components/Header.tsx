//todo
import React from 'react';
import Logo from '../assets/images/Informalcode-logo.png';
import { Link } from 'react-scroll';

const Header: React.FC = () => {
  interface ScrollLinkProps {
    to: string;
    children: React.ReactNode;
    spy?: boolean;
    duration?: number;
  }
  const ScrollLink = ({ to, children, duration = 200 }: ScrollLinkProps) => (
    <li className='nav-item px-md-3 px-sm-1'>
      <Link
        to={to}
        smooth={true}
        duration={duration}
        offset={-70}
        className='nav-link'
        style={{ cursor: 'pointer' }}
      >
        {children}
      </Link>
    </li>
  );
  return (
    <header id='page-header'>
      <nav className='navbar navbar-expand-lg bg-white px-xl-5 px-sm-1'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#home'>
            <img src={Logo} width='150' height='45' alt='Logo' />
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ms-auto'>
              <ScrollLink to='home'>Home</ScrollLink>
              <ScrollLink to='service'>Service</ScrollLink>
              <ScrollLink to='about'>About</ScrollLink>
              <ScrollLink to='career' spy={true}>
                Career
              </ScrollLink>
              <ScrollLink to='contact'>Contact</ScrollLink>
              <li className='nav-item px-md-3 px-sm-1'>
                <a className='btn' href='#'>
                  Talk to us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
