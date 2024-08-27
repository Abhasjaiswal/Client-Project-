import React from 'react';
import './styles.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="top-bar">
        <div className="contact-info">
          <i className="fas fa-mail-bulk"></i>
          <span>abc@gmail.com</span>
        </div>
        <div className="social-icons">
          <a href="" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div className="contact-info">
          <i className="fas fa-phone-alt"></i>
          <span>+91-9999999999</span>
        </div>
      </div>

      <nav className="main-nav">
        <img src alt="Logo" className="logo" />
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="/business">Service</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Who We Serve</a></li>
          <li><a href="#">Expertise</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
        <button className="connect-btn">Let's Connect</button>
      </nav>
    </header>
  );
}

export default Navbar;
