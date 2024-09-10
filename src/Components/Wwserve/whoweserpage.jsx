// import React from "react";
// import "./styles.css";
// import Contactus from "../LandContact/contact"
// import image1 from "../../assets/Images/health1.jpg";
// import image2 from "../../assets/Images/health2.jpg";
// import image3 from "../../assets/Images/health3.jpg";

// const Multimedia = () => {
//   return (
//     <>
//     <div className="market-section">
//     {/* <div className="overlay"></div> */}
//     <div className="content">
//         <h1 className="market-title">CMS</h1>
//         <div className="underline"></div>
//         <p className="market-subtitle">CARD MANAGEMENT SYSTEMS</p>
//     </div>
// </div>
// <div className="info-container">
//       <div className="section">
//         <h2 className="title">
//           HEALTH CARDS
//           <span className="underline"></span>
//         </h2>
//         <p className="description">
//           Colour Stop delivers health cards and social insurance cards across every continent, recognizing their sensitive nature for two key reasons: they serve as proof of national identity and grant access to essential medical services.
//         </p>
//         <p className="description">
//           Our health cards adhere to stringent security standards akin to national ID cards, featuring intricate electronic specifications. Ensuring the utmost protection of sensitive information, our challenge lies in continuously updating medical records and the holder’s entitlements. Trust Colour Stop to provide secure and reliable health cards, facilitating access to vital healthcare services worldwide.
//         </p>
//       </div>

//       <div className="section">
//         <h2 className="title">
//           VIRTUAL FILES
//           <span className="underline"></span>
//         </h2>
//         <p className="description">
//           Access to healthcare for beneficiaries is contingent upon their contributions or inherent entitlements, regulated by health authorities and subject to regular fluctuations.
//         </p>
//         <p className="description">
//           Colour Stop provides digital solutions enabling health cardholders to access their medical records online. This access can be shared with healthcare practitioners at the patient’s discretion, fostering collaboration and informed decision-making in healthcare management. Trust Colour Stop to offer innovative digital solutions that empower individuals to take control of their health information securely and conveniently.
//         </p>
//       </div>
//     </div>
//     <div className="credential-section">
//       <div className="credential-content">
//         <h1 className="credential-title">CREDENTIAL MANAGEMENT SYSTEM (CMS)</h1>
//         <div className="underline"></div>
//         <p className="credential-paragraph">
//           Colour Stop annually produces hundreds of millions of prepaid scratch cards for phone top-up services, a critical component of telecommunications today.
//         </p>
//         <p className="credential-paragraph">
//           These scratch cards are not just simple vouchers; they are valuable assets that demand a stringent level of security throughout the entire process, from electronic money encoding management to production, packaging, and distribution.
//         </p>
//         <p className="credential-paragraph">
//           Our esteemed clients include major telecommunications operators such as Orange, SFR, Vodafone, and Etisalat, operating across Europe, Africa, Central Asia, and the Middle East. These partnerships underscore Colour Stop’s reputation as a trusted provider of secure and reliable solutions in the telecommunications industry.
//         </p>
//         <p className="credential-paragraph">
//           Furthermore, drawing from our extensive experience in supplying scratch tickets to national lotteries, our Puy Guillaume factory is well-equipped to organize gaming initiatives, adding another dimension to our services. Count on Colour Stop to deliver high-quality prepaid scratch cards and gaming solutions, supported by unparalleled expertise and a steadfast commitment to security.
//         </p>
//       </div>
//     </div>
//     <div className="info-container">
//     <div className="section">
//         <h2 className="title">
//         BIOMETRIC ENROLMENT
//           <span className="underline"></span>
//         </h2>
//         <p className="description">Managing an electronic document-issuing program requires a global approach.
//         </p>
//         <p className="description">Colour Stop offers a comprehensive Content Management System (CMS) designed to facilitate administrator tasks such as activating accounts, managing rights, monitoring activities, updating profiles, and temporarily blocking or revoking accounts if needed.
//         </p>
//         <p className="description">As a crucial component of the program, Colour Stop’s CMS is adaptable to all languages and can be customized to meet the unique requirements of each project.</p>
//          <p className="description">In the context of a health card issuance project, the CMS plays a pivotal role in organizing healthcare credits and debits, introducing new possibilities, particularly beneficial for NGOs targeting specific population categories. Trust Colour Stop’s versatile CMS to streamline document issuance processes and enhance program effectiveness.
//         </p>
//       </div>
//       </div>
//       <div>
//       <Contactus/>
//       </div>
//       <div className="image-row">
//       <div className="image-container">
//         <img src={image1} alt="Doctor with family" />
//       </div>
//       <div className="image-container">
//         <img src={image2} alt="Hands holding heart with stethoscope" />
//       </div>
//       <div className="image-container">
//         <img src={image3} alt="Stethoscope with globe" />
//       </div>
//     </div>
     
//     </>
//   );
// };

// export default Multimedia;

import React from "react";
import "./styles.css";
import Contactus from "../LandContact/contact";

const Multimedia = ({ marketTitle, marketSubtitle, sections, credentialTitle, credentialParagraphs, images ,  backgroundImage 
}) => {
  return (
    <>
      <div
        className="market-section"
        style={{
          backgroundImage: `url(${backgroundImage})`, // Dynamically set background image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="content">
          <h1 className="market-title">{marketTitle}</h1>
          <div className="underline"></div>
          <p className="market-subtitle">{marketSubtitle}</p>
        </div>
      </div>

      <div className="info-container">
        {sections.map((section, index) => (
          <div className="section" key={index}>
            <h2 className="title">
              {section.title}
              <span className="underline"></span>
            </h2>
            {section.paragraphs.map((paragraph, idx) => (
              <p className="description" key={idx}>
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>

      <div className="credential-section">
        <div className="credential-content">
          <h1 className="credential-title">{credentialTitle}</h1>
          <div className="underline"></div>
          {credentialParagraphs.map((paragraph, idx) => (
            <p className="credential-paragraph" key={idx}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div>
        <Contactus />
      </div>

      <div className="image-row">
        {images.map((image, idx) => (
          <div className="image-container" key={idx}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Multimedia;
