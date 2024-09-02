import React from "react";
import "./style.css"; // Import your CSS file here

function ContactInfo() {
  return (
    <>
      <div className="market-section">
        <div className="overlay"></div>
        <div className="content">
          <h1 className="market-title">Contact Us</h1>
          <div className="underline"></div>
        </div>
      </div>

      <div className="contact-container">
        <h1 className="contact-heading">Contact Information</h1>
        <p className="contact-subheading">
          Have questions or ready to place an order? Reach out to our expert
          team for personalized assistance and quotes.
        </p>

        <div className="contact-info">
          <div className="contact-card">
            <img
              src="https://img.icons8.com/material-outlined/48/000000/new-post.png"
              alt="Mail Icon"
              className="contact-icon"
            />
            <h3>Company Mail</h3>
            <p>sales.macreations@gmail.com</p>
            <p>macreations@gmail.com</p>
          </div>

          <div className="contact-card">
            <img
              src="https://img.icons8.com/material-outlined/48/000000/phone.png"
              alt="Phone Icon"
              className="contact-icon"
            />
            <h3>Office Phone Number</h3>
            <p>
              <strong>Sales Co-ordinator</strong>
            </p>
            <p>Mukesh Sahoo: +91 xxxxx xxxxx</p>
          </div>

          <div className="contact-card">
            <img
              src="https://img.icons8.com/material-outlined/48/000000/address.png"
              alt="Location Icon"
              className="contact-icon"
            />
            <h3>Office Location</h3>
            <p>Unit No-167, 1st Floor, Adarsh Industrial Estate,</p>
            <p>Near Chakala Cigarette Factory, Sahar Road,</p>
            <p>Andheri (E), Mumbai - 400099.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactInfo;
