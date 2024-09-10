import React from "react";
import Navbar from "../../../Components/NavBar/Navbar";
import Wwserve from "../../../Components/Wwserve/whoweserpage";
import Footer from "../../../Components/Footer/Footer";
import image1 from "../../../assets/Images/health1.jpg"
import image2 from "../../../assets/Images/health2.jpg";
import image3 from "../../../assets/Images/health3.jpg";
import backgroundImage from "../../../assets/Images/production8.jpg"; // Import your image

const Landing = () => {
  const images = [
    { src: image1, alt: "Doctor with family" },
    { src: image2, alt: "Hands holding heart with stethoscope" },
    { src: image3, alt: "Stethoscope with globe" },
  ];

  const sections = [
    {
      title: "HEALTH CARDS",
      paragraphs: [
        "Colour Stop delivers health cards and social insurance cards across every continent, recognizing their sensitive nature for two key reasons: they serve as proof of national identity and grant access to essential medical services.",
        "Our health cards adhere to stringent security standards akin to national ID cards, featuring intricate electronic specifications. Ensuring the utmost protection of sensitive information, our challenge lies in continuously updating medical records and the holder’s entitlements.",
      ],
    },
    {
      title: "VIRTUAL FILES",
      paragraphs: [
        "Access to healthcare for beneficiaries is contingent upon their contributions or inherent entitlements, regulated by health authorities and subject to regular fluctuations.",
        "Colour Stop provides digital solutions enabling health cardholders to access their medical records online. This access can be shared with healthcare practitioners at the patient’s discretion, fostering collaboration and informed decision-making in healthcare management.",
      ],
    },
  ];

  const credentialTitle = "CARD MANAGEMENT SYSTEMS";
  const credentialParagraphs = [
    "Colour Stop annually produces hundreds of millions of prepaid scratch cards for phone top-up services, a critical component of telecommunications today.",
    "These scratch cards are not just simple vouchers; they are valuable assets that demand a stringent level of security throughout the entire process, from electronic money encoding management to production, packaging, and distribution.",
    "Our esteemed clients include major telecommunications operators such as Orange, SFR, Vodafone, and Etisalat, operating across Europe, Africa, Central Asia, and the Middle East. These partnerships underscore Colour Stop’s reputation as a trusted provider of secure and reliable solutions in the telecommunications industry.",
    "Furthermore, drawing from our extensive experience in supplying scratch tickets to national lotteries, our Puy Guillaume factory is well-equipped to organize gaming initiatives, adding another dimension to our services. Count on Colour Stop to deliver high-quality prepaid scratch cards and gaming solutions, supported by unparalleled expertise and a steadfast commitment to security.",
  ];

  return (
    <div>
      <Navbar />
      <Wwserve
        marketTitle="HEALTH"
        marketSubtitle=""
        sections={sections}
        credentialTitle={credentialTitle}
        credentialParagraphs={credentialParagraphs}
        images={images}
        backgroundImage={backgroundImage}
      />
      <Footer />
    </div>
  );
};

export default Landing;
