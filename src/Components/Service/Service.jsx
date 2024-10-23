import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles.css';
import lanyardsImage from '../../assets/Images/Layer-1-1024x684.png'
import lanyardsImage2 from '../../assets/Images/Layer-1-1024x684.png'

const ExpertiseSection = () => {
  return (
    <>
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
    <section className="banner-section">
      <div className="banner-content">
        <h1>LANYARDS</h1>
        <div className="underline"></div>
      </div>
    </section>
    <div className="lanyards-container">
      <div className="lanyards-text">
        <h2>What is Lanyards?</h2>
        <hr className="underline" />
        <p>
          Lanyards are versatile accessories designed to hold badges, IDs, keys,
          or other items securely around one's neck or wrist. Typically consisting
          of a strip of fabric or durable material, lanyards often feature
          attachments such as clips, hooks, or rings for easy attachment and
          removal of items. Beyond their practical functionality, lanyards serve
          as effective branding tools, providing businesses and organizations
          with an opportunity to showcase their logos, slogans, or other branding
          elements. Whether used in corporate settings, at events, or for everyday
          convenience, lanyards offer a practical and stylish solution for carrying
          essential items while also promoting brand visibility.
        </p>
      </div>
      <div className="lanyards-image">
        <img src={lanyardsImage} alt="Lanyards" />
      </div>
    </div>
    <section className="banner-section">
      <div className="banner-content">
        <h1>ID Crads</h1>
        <div className="underline"></div>
      </div>
    </section>
    <div className="lanyards-container">
      <div className="lanyards-text">
        <h2>What is ID Cards ?</h2>
        <hr className="underline" />
        <p>Your identity deserves the utmost representation. At Colour Stop, our custom-designed ID cards are meticulously crafted to blend design finesse with top-notch security features, ensuring that your brand is carried with confidence at all times. Whether they’re utilized for access control, corporate identification purposes, or events, our ID cards seamlessly integrate your branding while prioritizing safety and professionalism. With attention to detail and a commitment to excellence, we ensure that each ID card not only reflects your brand identity but also serves as a reliable tool for authentication and identification. Trust Colour Stop to elevate your brand’s presence with expertly designed and secure ID cards tailored to your unique requirements.
        </p>
      </div>
      <div className="lanyards-image">
        <img src={lanyardsImage2} alt="Lanyards" />
      </div>
    </div>
    </>
  );
};

export default ExpertiseSection;
