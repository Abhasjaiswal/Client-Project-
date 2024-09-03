import React from 'react';
import './style.css'; // We'll use this for the styles
import image1 from './image.png'
const ConcertsProduct = () => {
    return (
        <div className="concerts-product">
            <h2 className="concerts-title">Concerts Product</h2>
            <div className="cards-container">
                <div className="card">
                    <img src={image1} alt="Superstar Singer 2" />
                    <p className="card-text">ASHUTOSH TIWARI<br/>AUDIT HEAD</p>
                </div>
                <div className="card">
                    <img src={image1} alt="Sidhu Moosewala" />
                    <p className="card-text">GUEST<br/>ALL ACCESS</p>
                </div>
                <div className="card">
                    <img src={image1} alt="Arijit Singh" />
                    <p className="card-text">ARJIT SINGH<br/>GIE-TEAM</p>
                </div>
            </div>
        </div>
    );
};

export default ConcertsProduct;
