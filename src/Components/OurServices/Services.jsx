import React from 'react';
import './styles.css';
import LanImage from "../../assets/Images/Landyards.JPG"
import IDImage from "../../assets/Images/ID.JPG"
const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-heading">
          <h2 className="animated fadeIn">Our Services</h2>
          <h2 className="animated fadeIn subtitle">
            We understand that every detail matters. Let us elevate your brand's identity with our expertly crafted lanyards<br/>
            and ID cards, making your presence felt with every wear.
          </h2>
        </div>
        <div className="services-content">
          <div className="service-item animated fadeIn">
            <img src={LanImage} alt="Service2" />
            <h2>Lanyards</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae aperiam eius natus, magnam cumque dignissimos hic rem, quisquam voluptatem tempore ab error, expedita nulla doloremque. Recusandae molestiae nostrum porro culpa?
            </p>
            <a href="#" className="learn-more-btn">LEARN MORE</a>
          </div>
          <div className="service-item animated fadeIn">
            <img src={IDImage} alt="Service2" />
            <h2>ID Cards</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt totam reiciendis placeat magni, dolore voluptates nam, a commodi repellendus explicabo eaque provident suscipit ad fuga. Expedita laudantium voluptatum commodi voluptate!
            </p>
            <a href="#" className="learn-more-btn">LEARN MORE</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
