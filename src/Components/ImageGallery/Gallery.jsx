import React from 'react';
import './styles.css';
import Imag1 from './image1.jpg';


const ImageGallery = () => {
  return (
    <div className="image-gallery">
      <img
        src={Imag1}
        alt="Warehouse"
        className="gallery-image"
      />
      <img
        src={Imag1}
        alt="Trucks"
        className="gallery-image"
      />
      <img
        src={Imag1}
        alt="Shipping containers"
        className="gallery-image"
      />
    </div>
  );
};

export default ImageGallery;
