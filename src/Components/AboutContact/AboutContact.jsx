import React from 'react';
import './style.css'; // Create a separate CSS file for styles if needed
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div className="contact-info1">
      <h2>For More Information And Details Call or Email Us</h2>
      <div className="contact-details1">
        <div className="contact-item1">
          <h3>Call Sales Co-ordinator</h3>
          <ul>
            <li><FaPhone /> XXXX XXXX: XXXX XXXXX</li>
            <li><FaPhone /> XXXX XXXX: XXXX XXXXX</li>
            <li><FaPhone /> XXXX XXXX: XXXX XXXXX</li>
            <li><FaPhone /> XXXX XXXX: XXXX XXXXX</li>
          </ul>
        </div>
        <div className="contact-item1">
          <h3>Email Us</h3>
          <ul>
            <li><FaEnvelope /> sales.macreations@gmail.com</li>
            <li><FaEnvelope /> maccreations@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
