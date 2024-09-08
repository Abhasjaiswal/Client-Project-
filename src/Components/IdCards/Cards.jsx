import React from 'react';
import './styles.css'; 
import img from  './student-school-id-card.webp' 
const IDCards = () => {
    return (
      <div className="id-card-container">
        {/* ID Card 1 */}
        <div className="id-card">
          <img
            src={img}
            alt="ID Card 1"
            className="id-image"
          />
        </div>
  
        {/* ID Card 2 */}
        <div className="id-card">
          <img
            src={img}
            alt="ID Card 2"
            className="id-image"
          />
        </div>
  
        {/* ID Card 3 */}
        <div className="id-card">
          <img
            src={img}
            alt="ID Card 3"
            className="id-image"
          />
        </div>
      </div>
    );
  };
  
  export default IDCards;