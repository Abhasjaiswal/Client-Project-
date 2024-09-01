import React, { useState } from 'react';
import './styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  const [isServiceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [isServeDropdownOpen, setServeDropdownOpen] = useState(false);
  const [isExpertiseDropdownOpen, setExpertiseDropdownOpen] = useState(false);

  const handleServiceMouseEnter = () => {
    setServiceDropdownOpen(true);
  };

  const handleServiceMouseLeave = () => {
    setServiceDropdownOpen(false);
  };

  const handleServeMouseEnter = () => {
    setServeDropdownOpen(true);
  };

  const handleServeMouseLeave = () => {
    setServeDropdownOpen(false);
  };
  const handleExpertiseMouseEnter = () => {
    setExpertiseDropdownOpen(true);
  };
  const handleExpertiseMouseLeave = () => {
    setExpertiseDropdownOpen(false);
    };

  return (
    <header className="navbar">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="contact-info">
          <i className="fas fa-mail-bulk"></i>
          <span>abc@gmail.com</span>
        </div>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div className="contact-info">
          <i className="fas fa-phone-alt"></i>
          <span>+91-9999999999</span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="main-nav">
        <img src="path/to/your/logo.png" alt="Logo" className="logo" />
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#">Products</a></li>

          {/* Service Dropdown */}
          <li 
            className="dropdown"
            onMouseEnter={handleServiceMouseEnter}
            onMouseLeave={handleServiceMouseLeave}
          >
            <a href="/business">Service <i className="fas fa-caret-down"></i></a>
            {isServiceDropdownOpen && (
              <ul className="dropdown-menu">
                <li><a href="/design">Design</a></li>
                <li><a href="/development">Development</a></li>
                <li><a href="/consulting">Consulting</a></li>
                <li><a href="/marketing">Marketing</a></li>
              </ul>
            )}
          </li>

          {/* Who We Serve Dropdown */}
          <li 
            className="dropdown"
            onMouseEnter={handleServeMouseEnter}
            onMouseLeave={handleServeMouseLeave}
          >
            <a href="#">Who We Serve <i className="fas fa-caret-down"></i></a>
            {isServeDropdownOpen && (
              <ul className="dropdown-menu">
                <li><a href="/health">Health</a></li>
                <li><a href="/multimedia">Multimedia</a></li>
                <li><a href="/identity">National Identity</a></li>
                <li><a href="/payment">Payment</a></li>
                <li><a href="/retail">Retail</a></li>
                <li><a href="/transport">Transport</a></li>
              </ul>
            )}
          </li>
          <li><a href="/about">About Us</a></li>

          <li 
            className="dropdown"
            onMouseEnter={handleExpertiseMouseEnter}
            onMouseLeave={handleExpertiseMouseLeave}
          >
            <a href="#">Expertise <i className="fas fa-caret-down"></i></a>
            {isExpertiseDropdownOpen && (
              <ul className="dropdown-menu">
                <li><a href="/markets">Markets</a></li>
                <li><a href="/production">Production</a></li>
                <li><a href="/data">Data</a></li>
                <li><a href="/digital">Digital</a></li>
                <li><a href="/personalization">Personalization</a></li>
                <li><a href="/cms">CMS</a></li>
              </ul>
            )}
          </li>
          <li><a href="#">Contact Us</a></li>
        </ul>
        <button className="connect-btn">Let's Connect</button>
      </nav>
    </header>
  );
}

export default Navbar;
