//todo
import React from 'react'
import Logo from '../images/Informalcode-logo.png'

const Header: React.FC = () => {
  return (
    <header id="page-header">
      <nav className="navbar navbar-expand-lg bg-white px-5 px-sm-1">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Logo} width="200" height="60" alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item px-3 px-sm-1">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item px-md-3 px-sm-1">
                <a className="nav-link" href="#service">
                  Service
                </a>
              </li>
              <li className="nav-item px-md-3 px-sm-1">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item px-md-3 px-sm-1">
                <a className="nav-link" href="#">
                  Career
                </a>
              </li>
              <li className="nav-item px-md-3 px-sm-1">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item px-md-3 px-sm-1">
                <a className="btn" href="#">
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