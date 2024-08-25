import React from 'react';
import './styles.css';

const Lanyards = () => {
    return (
        <div className="lanyards-container">
            <h1>LANYARDS</h1>
            <div className="lanyards-grid">
                <div className="lanyard-card">
                    <div className="image-placeholder"></div>
                    <h3>NBC Lanyard</h3>
                    <button className="lanyard-btn">Click here</button>
                </div>
                <div className="lanyard-card">
                    <div className="image-placeholder"></div>
                    <h3>FEDEX Lanyard</h3>
                    <button className="lanyard-btn">Click here</button>
                </div>
                <div className="lanyard-card">
                    <div className="image-placeholder"></div>
                    <h3>SBI Lanyard</h3>
                    <button className="lanyard-btn">Click here</button>
                </div>
            </div>
        </div>
    );
};

export default Lanyards;
