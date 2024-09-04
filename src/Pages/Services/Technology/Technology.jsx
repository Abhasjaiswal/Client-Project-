import React from "react";
import Navbar from "../../../Components/NavBar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import image1 from "../../../assets/Images/production1.jpg"  // Import Images for the cards 

import Header from "../../../Components/Header/Header"; // Import the Header component
import Products from "../../../Components/ServiceProds/Products";

const Technology = () => {
    const cards = [   // Create Cards here 
        {
            image: image1, // use the imported name here 
            altText: "Superstar Singer 2",
            text: "ASHUTOSH TIWARI<br/>AUDIT HEAD"
        },
        {
            image: image1,
            altText: "Sidhu Moosewala",
            text: "GUEST<br/>ALL ACCESS"
        },
        {
            image: image1,
            altText: "Arijit Singh",
            text: "ARJIT SINGH<br/>GIE-TEAM"
        }
    ];
    return (
        <div>
            <Navbar />
            <Header 
                title="Technology"   //Pass the title here 
                // subtitle="Experience the Best Live Performances" //pass the subtitle here 
                backgroundImage={require('../../../assets/Images/cms5.jpg')} // Pass the image path here
            />
            <Products
            title="Technology" 
            cards={cards} 

            />
            <Footer />
        </div>
    );
};

export default Technology;
