import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles.css';

const PublicTransport = () => {
  return (
    <div className="public-transport">
      <h2 className="public-transport-title">
        PUBLIC TRANSPORT
        <div className="underline"></div>
      </h2>
      <p className="public-transport-description">
        Colour Stop pioneers tailored contactless solutions designed specifically for metropolitan cities and public transport operators, ensuring seamless and efficient travel experiences. Our diverse range of offerings includes:
      </p>
      <ol className="public-transport-list">
        <li><strong>Dynamic Paper Tickets:</strong> Pre-personalized for single trips or available in booklets, crafted from durable Teslin or eco-friendly cardboard materials.</li>
        <li><strong>Anonymous Passes:</strong> Ideal for frequent travelers needing weekly or monthly access, featuring instant chip personalization for immediate use.</li>
        <li><strong>Personalized Subscriptions:</strong> Customizable cards for long-term use or special tariffs, offering on-site card and chip personalization to meet individual needs.</li>
      </ol>
      <p className="public-transport-description">
        Colour Stop's contactless cards integrate seamlessly with various technologies such as Mifare (from Ultralight to Desfire), Calypso (Classic and Light), and Java Cards (with Mifare and Calypso software). Our commitment to innovation ensures that metropolitan transit systems and transportation companies benefit from efficient, adaptable solutions that enhance passenger convenience and operational effectiveness.
      </p>
      <p className="public-transport-description">
        Partner with Colour Stop to transform urban mobility with cutting-edge, customizable contactless solutions that set new standards for accessibility and reliability in public transportation.
      </p>
    </div>
  );
};

export default PublicTransport;