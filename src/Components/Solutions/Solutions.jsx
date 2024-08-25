import React from 'react';
import './styles.css';

const solution1 = () => {
  return (
    <div className="lanyard-container">
    <div className="text-image-wrapper">
        <div className="text-section">
            <h1>Tailoring Lanyard Solutions for Various Industries</h1>
            <p>
                At Colour Stop our commitment to crafting personalized lanyards extends beyond corporate businesses and events. We take pride in serving a diverse range of industries, ensuring that each lanyard reflects the unique identity and requirements of our clients. Here are some of the industries we cater to:
            </p>
        </div>

        <div className="image-section">
            {/* Placeholder for the Image */}
            <div className="image-placeholder"></div>
        </div>
    </div>

    <div className="industries-grid">
        <div className="industry-item">
            <h3>Entertainment and Media</h3>
            <p>Design lanyards for film festivals, music concerts, and entertainment conventions that reflect the theme of the event.</p>
        </div>
        <div className="industry-item">
            <h3>Education Sector</h3>
            <p>Elevate school or University spirit with custom lanyards that display your institution's logo, colors, and motto. Use them to hold student IDs, access cards, and more.</p>
        </div>
        <div className="industry-item">
            <h3>Financial and Banking</h3>
            <p>Lanyards and ID Cards that reinforce trust and security, aligning with the financial sector’s image.</p>
        </div>
        <div className="industry-item">
            <h3>Healthcare and Medical</h3>
            <p>Create branded lanyards for medical staff, ensuring easy identification and enhancing professionalism.</p>
        </div>
        <div className="industry-item">
            <h3>Government Services</h3>
            <p>Create official lanyards for government personnel, enhancing security and professionalism.</p>
        </div>
        <div className="industry-item">
            <h3>Solutions For Every Sector</h3>
            <p>Let’s explore how we can design the ideal lanyards and ID Cards for your industry, leaving a memorable impression.</p>
        </div>
    </div>
</div>
  );
};

export default solution1;
