import React from 'react';
import './styles.css';
import HomeImage from "../../assets/Images/home.JPG"


const identity1 = () => {
  return (
    <section className="lanyard-section">
    <div className="text-content">
      <h1>Empower Your Brand's Identity with XYZ's Personalized Solutions</h1>
      <p>
        At XYZ, we understand that every detail matters when it comes
        to representing your brand, whether it's in the corporate world or at
        events. That's why we're here to offer you the finest custom lanyard
        solutions that not only hold badges and IDs but also elevate your
        brand identity. With a focus on quality, customization, and
        exceptional service, we take pride in being your go-to source for
        premium lanyards.
      </p>
    </div>
    <div className="image-content">
      <img src={HomeImage} alt="Lanyards" />
    </div>
  </section>
  );
};

export default identity1;
