import React from "react";
import Navbar from "../../../Components/NavBar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import Public from "../../../Components/PublicTran/Public";
import Header from "../../../Components/Header/Header"; // Import the Header component
import Digital from "../../../Components/DigitalSol/Digital";
import Contact from "../../../Components/LandContact/contact";
import Gallery from "../../../Components/ImageGallery/Gallery";

const Events = () => {
    return (
        <div>
            <Navbar />
            <Header 
                title="Transport"   //Pass the title here 
                // subtitle="Experience the Best Live Performances" //pass the subtitle here 
                backgroundImage={require('../../../assets/Images/cms3.jpg')} // Pass the image path here
            />
            <Public/>

            <Digital/>
            <Contact/>
            <Gallery/>
            <Footer />
        </div>
    );
};

export default Events;
