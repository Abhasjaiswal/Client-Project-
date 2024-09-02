import React from 'react';
import './style.css'; // Custom CSS
import image1 from "./Aditya-Birla.png"

const CategoryCards = () => {
  return (
    <div className="category-cards-container">
      <div className="filters">
        <button className="filter-button active">ALL</button>
        <button className="filter-button">FINANCIAL</button>
        <button className="filter-button">SCHOOL</button>
        <button className="filter-button">BUSINESS</button>
        <button className="filter-button">EVENTS</button>
        <button className="filter-button">TECHNOLOGY</button>
        <button className="filter-button">CONCERTS</button>
      </div>

      <div className="cards">
        <div className="card">
          <img src={image1} alt="Aditya Birla" />
          {/* <p className="card-title">B.B PURAM TEAM ADITYA BIRLA GROUP</p> */}
        </div>
        <div className="card">
          <img src={image1} alt="Bharat Lal Sharma" />
          {/* <p className="card-title">BHARAT LAL SHARMA</p> */}
        </div>
        <div className="card">
          <img src={image1} alt="Arijit Singh" />
          {/* <p className="card-title">ARJIT SINGH LIVE IN CONCERT</p> */}
        </div>
        <div className="card">
        <img src={image1} alt="Arijit Singh" />
        {/* <p className="card-title">XUV 400</p> */}
        </div>
        <div className="card">
        <img src={image1} alt="Arijit Singh" />
        {/* <p className="card-title">XUV 400</p> */}
        </div>
        <div className="card">
        <img src={image1} alt="Arijit Singh" />
        {/* <p className="card-title">XUV 400</p> */}
        </div>
        <div className="card">
        <img src={image1} alt="Arijit Singh" />
        {/* <p className="card-title">XUV 400</p> */}
        </div>
        <div className="card">
        <img src={image1} alt="Arijit Singh" />
        {/* <p className="card-title">XUV 400</p> */}
        </div>
        <div className="card">
        <img src={image1} alt="Arijit Singh" />
        {/* <p className="card-title">XUV 400</p> */}
        </div>
        <div className="card">
        <img src={image1} alt="Arijit Singh" />
        {/* <p className="card-title">XUV 400</p> */}
        </div>
        <div className="card">
        <img src={image1} alt="Arijit Singh" />
        {/* <p className="card-title">XUV 400</p> */}
        </div>
        <div className="card">
        <img src={image1} alt="Arijit Singh" />
        {/* <p className="card-title">XUV 400</p> */}
        </div>
      </div>
    </div>
  );
};

export default CategoryCards;
