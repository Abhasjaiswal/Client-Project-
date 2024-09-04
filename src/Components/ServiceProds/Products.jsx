import React from 'react';
import './styles.css'; // Import the CSS file

const ConcertsProduct = ({ title, cards}) => {
    return (
        <div className="concerts-product">
            <h2 className="concerts-title">{title}</h2>
            <div className="cards-container">
                {cards.map((card, index) => (
                    <div className="card" key={index}>
                        <img src={card.image} alt={card.altText} />
                        <p className="card-text">{card.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ConcertsProduct;
