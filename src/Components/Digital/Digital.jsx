import React from 'react';
import './styles.css';
import img1 from "../../assets/Images/Digi1.jpg";
import img2 from "../../assets/Images/digi2.jpg";
import img3 from "../../assets/Images/digi3.jpg";
import img4 from "../../assets/Images/digi4.jpg";


const MarketSection = () => {
    const sections = [
        {
            title: "COLOURSTOP DIGITAL",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate enim eum itaque delectus minima officiis, id, ipsum, consequatur cumque quaerat ea accusamus sunt facere nostrum corporis exercitationem rerum blanditiis commodi? Inventore fugiat libero ea quas id placeat amet vitae alias recusandae veniam nostrum consectetur ex soluta similique magnam harum delectus earum in maxime, modi quia omnis. Ipsum deleniti illum natus.",
            image: img1,
            alignLeft: true,
        },
        {
            title: "FRIZBEE THE E-GIFT CARD PLATFORM",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate enim eum itaque delectus minima officiis, id, ipsum, consequatur cumque quaerat ea accusamus sunt facere nostrum corporis exercitationem rerum blanditiis commodi. Inventore fugiat libero ea quas id placeat amet vitae alias recusandae veniam nostrum consectetur ex soluta similique magnam harum delectus earum in maxime, modi quia omnis. Ipsum deleniti illum natus.",
            image: img2,
            alignLeft: false,
        },
        {
            title: "SMART CITIES",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate enim eum itaque delectus minima officiis, id, ipsum, consequatur cumque quaerat ea accusamus sunt facere nostrum corporis exercitationem rerum blanditiis commodi? Inventore fugiat libero ea quas id placeat amet vitae alias recusandae veniam nostrum consectetur ex soluta similique magnam harum delectus earum in maxime, modi quia omnis. Ipsum deleniti illum natus.",
            image: img3,
            alignLeft: true,
        },
        {
            title: "DIGITAL IDENTITY",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate enim eum itaque delectus minima officiis, id, ipsum, consequatur cumque quaerat ea accusamus sunt facere nostrum corporis exercitationem rerum blanditiis commodi? Inventore fugiat libero ea quas id placeat amet vitae alias recusandae veniam nostrum consectetur ex soluta similique magnam harum delectus earum in maxime, modi quia omnis. Ipsum deleniti illum natus.",
            image: img4,
            alignLeft: false,
        },
    ];

    return (
        <>
            <div className="market-section">
                <div className="overlay"></div>
                <div className="content">
                    <h1 className="market-title">Digital</h1>
                    <div className="underline"></div>
                    <p className="market-subtitle">SOLUTIONS FOR PAYMENT AND IDENTITY</p>
                </div>
            </div>

            <div className="info-sections">
                {sections.map((section, index) => (
                    <div
                        className={`info-section ${section.alignLeft ? 'left-align' : 'right-align'}`}
                        key={index}
                    >
                        <div className="text-content">
                            <h2 className="section-title">{section.title}</h2>
                            <p className="section-description">{section.description}</p>
                        </div>
                        <div className="image-content">
                            <img src={section.image} alt={section.title} className="section-image" />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default MarketSection;
