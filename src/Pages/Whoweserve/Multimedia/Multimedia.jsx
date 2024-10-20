import React from "react";
import Navbar from "../../../Components/NavBar/Navbar";
import Wwserve from "../../../Components/Wwserve/whoweserpage";
import Footer from "../../../Components/Footer/Footer";
import image1 from "../../../assets/Images/health1.jpg"
import image2 from "../../../assets/Images/health2.jpg";
import image3 from "../../../assets/Images/health3.jpg";
import backgroundImage from "../../../assets/Images/production8.jpg"; // Import your image

const Landing1 = () => {
  const images = [
    { src: image1, alt: "Doctor with family" },
    { src: image2, alt: "Hands holding heart with stethoscope" },
    { src: image3, alt: "Stethoscope with globe" },
  ];

  const sections = [
    {
      title: "MULTIMEDIA CONTENT SUPPLIERS",
      paragraphs: [
        "Colour Stop serves as a trusted partner to multimedia content providers, including telecommunications operators, download platforms, and network access suppliers.",
        "In today’s digital landscape, these entities often face threats from fraudsters. Recognizing this challenge, Colour Stop has developed specialized products and services that prioritize reliability and security. Our solutions are tailored to meet the unique needs of our partners in the multimedia content industry, providing them with peace of mind and enhanced protection against fraud.",
        "Colour Stop’s commitment to delivering reliable and secure solutions is greatly appreciated by our partners, reinforcing our position as a trusted ally in safeguarding their operations and ensuring a seamless experience for their customers.",
      ],
    },
  ];

  const credentialTitle = "TELEPHONE SUPPLIERS";
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
        marketTitle="MULTIMEDIA"
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

export default Landing1;
