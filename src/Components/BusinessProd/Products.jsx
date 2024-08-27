import React from "react";
import "./style.css";
// import Mahindra from "./Mahindra.png"
const BusinessProduct = () => {
  return (
    <div className="business-product-container">
      <h2 className="business-product-title">Business Product</h2>
      <div className="cards-container">
        <Card 
          imageSrc=""
        />
        <Card 
          imageSrc=""
        />
        <Card 
          imageSrc=""
        />
      </div>
    </div>
  );
};

const Card = ({ imageSrc, title, subtitle, description, logoSrc }) => {
  return (
    <div className="card">
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        {subtitle && <h4 className="card-subtitle">{subtitle}</h4>}
        <p className="card-description">{description}</p>
      </div>
      <div className="card-image-container">
        <img src={imageSrc} alt={title} className="card-image" />
      </div>
    </div>
  );
};

export default BusinessProduct;
