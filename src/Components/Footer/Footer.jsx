import React from 'react';
import './styles.css'; 
import Credits from '../Credits/Credits'; // Import the Credits component
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h2>XYZ Solutions Pvt. Ltd.</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci dolorum hic ipsam. Deleniti ut neque impedit ea. Accusamus, exercitationem voluptatum molestias error ratione fugit? Voluptatem excepturi temporibus nesciunt eum nemo.
            </p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Address List</h3>
            <address>
              Unit No-XYZ, XYZ Floor, XXXX XXXXXX XXXX,<br />
              XXXX XXXXXX XXXXXX XXXXX,<br />
              XXXXX Road, Andheri (E), Mumbai - 400099.<br /><br />
              
              <strong>Mukesh Sahoo:</strong> 9999 99999<br />
              <strong>Email:</strong> <a href="mailto:sales.colourxpress@gmail.com">sales.xyz@gmail.com</a><br />
              <a href="mailto:colourxpress9@gmail.com">xyzsales@gmail.com</a>
            </address>
          </div>
        </div>
      </footer>
      <Credits /> 
    </div>
  );
};


export default Footer;
