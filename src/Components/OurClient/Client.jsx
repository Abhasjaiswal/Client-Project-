import React from 'react';
import Slider from 'react-slick';
import './style.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ClientsSection = () => {
    const settings = {
      dots: false, // No dots at the bottom
      infinite: true, // Infinite scrolling
      speed: 500, // Transition speed
      slidesToShow: 5, // Show 5 logos at a time
      slidesToScroll: 1, // Scroll one logo at a time
      autoplay: true, // Auto slide
      autoplaySpeed: 2000, // Speed of auto-slide
      arrows: true // Display arrows for manual navigation
    };
  
    return (
      <section className="clients-section">
        <h2>Our Clients</h2>
        <div className="clients-slider">
          <Slider {...settings}>
            <div className="client-logo">
              <img src="path_to_logo/ongc.png" alt="ONGC" />
            </div>
            <div className="client-logo">
              <img src="path_to_logo/adani.png" alt="Adani" />
            </div>
            <div className="client-logo">
              <img src="path_to_logo/airtel.png" alt="Airtel" />
            </div>
            <div className="client-logo">
              <img src="path_to_logo/essar.png" alt="Essar" />
            </div>
            <div className="client-logo">
              <img src="path_to_logo/tata.png" alt="Tata" />
            </div>
          </Slider>
        </div>
      </section>
    );
  };
  
  export default ClientsSection;