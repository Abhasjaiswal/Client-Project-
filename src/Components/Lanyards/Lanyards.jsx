import React from 'react';
import './styles.css';

const Lanyards = () => {
  return (
    <div className="container">
      <h2 className="section-title">LANYARDS</h2>
      <hr className="divider" />
      <div className="row">
        <div className="card">
          <div className="image-placeholder"></div>
          <p className="label">NBC Lanyard</p>
          <button className="click-btn">Click here</button>
        </div>
        <div className="card">
          <div className="image-placeholder"></div>
          <p className="label">FEDEX Lanyard</p>
          <button className="click-btn">Click here</button>
        </div>
        <div className="card">
          <div className="image-placeholder"></div>
          <p className="label">SBI Lanyard</p>
          <button className="click-btn">Click here</button>
        </div>
      </div>

      <h2 className="section-title">ID CARDS</h2>
      <hr className="divider" />
      <div className="row">
        <div className="card">
          <div className="image-placeholder"></div>
          <p className="label">Black Embossing</p>
          <button className="click-btn">Click here</button>
        </div>
        <div className="card">
          <div className="image-placeholder"></div>
          <p className="label">Red Embossing</p>
          <button className="click-btn">Click here</button>
        </div>
        <div className="card">
          <div className="image-placeholder"></div>
          <p className="label">Yellow Embossing</p>
          <button className="click-btn">Click here</button>
        </div>
      </div>
    </div>
  );
};

export default Lanyards;
