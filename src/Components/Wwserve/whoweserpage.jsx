import React from 'react';
import './styles.css'; 
import bannerImage from '../../assets/Images/card.jpg';  // Adjust the path according to your folder structure

const HealthBanner = () => {
  return (
    <div className="banner-container">
      <img src={bannerImage} alt="Health Banner" className="banner-image" />
      <div className="banner-text">
        <span>HEALTH</span>
      </div>
    </div>
  );
};

export default HealthBanner;
