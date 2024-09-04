import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles.css';

const ExpertiseSection = () => {
  return (
    <section className="expertise-section">
      <div className="expertise-banner">
        <h2>SERVICES</h2>
        <div className="banner-underline"></div>
      </div>
      <div className="expertise-content">
        <h3>Leading Innovations Across Industries</h3>
        <div className="red-underline"></div>
        <p>
          Colour Stop boasts a wealth of expertise across a diverse range of industries and sectors, 
          making us a trusted partner for organizations seeking innovative solutions and unparalleled service. 
          With decades of experience in the design, development, and manufacturing of secure documents and 
          digital solutions, we have established ourselves as leaders in the field of identity management. 
          Our expertise extends to national identity programs, where we provide end-to-end solutions, 
          from enrollment to issuance, ensuring the integrity and security of identity documents.
        </p>
        <p>
          In the realm of telecommunications, Colour Stop excels in providing smart card solutions for TV decoders 
          and mobile top-up services. Leveraging our advanced technologies and secure manufacturing processes, 
          we deliver high-quality smart cards that meet the stringent requirements of telecommunications operators 
          worldwide. Our commitment to innovation and quality assurance positions us as a preferred partner for 
          organizations seeking reliable and secure smart card solutions.
        </p>
      </div>
    </section>
  );
};

export default ExpertiseSection;
