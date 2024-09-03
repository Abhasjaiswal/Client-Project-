import React from 'react';
import './styles.css';
import production1 from "../../assets/Images/production1.jpg";
import production2 from "../../assets/Images/production2.jpg";
import production3 from "../../assets/Images/production3.jpg";
import production4 from "../../assets/Images/production4.jpg";
import production5 from "../../assets/Images/production5.jpg";
import production6 from "../../assets/Images/production6.jpg";
import production7 from "../../assets/Images/production7.jpg";
import production8 from "../../assets/Images/production8.jpg";


const MarketSection = () => {
    const sections = [
        {
            title: "HIGH SECURITY PRINTING",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate enim eum itaque delectus minima officiis, id, ipsum, consequatur cumque quaerat ea accusamus sunt facere nostrum corporis exercitationem rerum blanditiis commodi? Inventore fugiat libero ea quas id placeat amet vitae alias recusandae veniam nostrum consectetur ex soluta similique magnam harum delectus earum in maxime, modi quia omnis. Ipsum deleniti illum natus.",
            image: production1,
            alignLeft: true,
        },
        {
            title: "DESIGN",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate enim eum itaque delectus minima officiis, id, ipsum, consequatur cumque quaerat ea accusamus sunt facere nostrum corporis exercitationem rerum blanditiis commodi. Inventore fugiat libero ea quas id placeat amet vitae alias recusandae veniam nostrum consectetur ex soluta similique magnam harum delectus earum in maxime, modi quia omnis. Ipsum deleniti illum natus.",
            image: production2,
            alignLeft: false,
        },
        {
            title: "SMARTCARDS",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate enim eum itaque delectus minima officiis, id, ipsum, consequatur cumque quaerat ea accusamus sunt facere nostrum corporis exercitationem rerum blanditiis commodi? Inventore fugiat libero ea quas id placeat amet vitae alias recusandae veniam nostrum consectetur ex soluta similique magnam harum delectus earum in maxime, modi quia omnis. Ipsum deleniti illum natus.",
            image: production3,
            alignLeft: true,
        },
        {
            title: "PASSPORT DATAPAGE",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate enim eum itaque delectus minima officiis, id, ipsum, consequatur cumque quaerat ea accusamus sunt facere nostrum corporis exercitationem rerum blanditiis commodi? Inventore fugiat libero ea quas id placeat amet vitae alias recusandae veniam nostrum consectetur ex soluta similique magnam harum delectus earum in maxime, modi quia omnis. Ipsum deleniti illum natus.",
            image: production4,
            alignLeft: false,
        },
        {
            title: "E-STICKERS",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate enim eum itaque delectus minima officiis, id, ipsum, consequatur cumque quaerat ea accusamus sunt facere nostrum corporis exercitationem rerum blanditiis commodi? Inventore fugiat libero ea quas id placeat amet vitae alias recusandae veniam nostrum consectetur ex soluta similique magnam harum delectus earum in maxime, modi quia omnis. Ipsum deleniti illum natus.",
            image: production5,
            alignLeft: true,
        },
        {
            title: "PRODUCTION OF THE CARRIERS",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate enim eum itaque delectus minima officiis, id, ipsum, consequatur cumque quaerat ea accusamus sunt facere nostrum corporis exercitationem rerum blanditiis commodi? Inventore fugiat libero ea quas id placeat amet vitae alias recusandae veniam nostrum consectetur ex soluta similique magnam harum delectus earum in maxime, modi quia omnis. Ipsum deleniti illum natus.",
            image: production6,
            alignLeft: false,
        },
        {
            title: "CONNECTED FACTORY ",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate enim eum itaque delectus minima officiis, id, ipsum, consequatur cumque quaerat ea accusamus sunt facere nostrum corporis exercitationem rerum blanditiis commodi? Inventore fugiat libero ea quas id placeat amet vitae alias recusandae veniam nostrum consectetur ex soluta similique magnam harum delectus earum in maxime, modi quia omnis. Ipsum deleniti illum natus.",
            image: production7,
            alignLeft: true,
        },
        {
            title: "QUALITY AND RESPECT FOR THE ENVIRONMENT",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate enim eum itaque delectus minima officiis, id, ipsum, consequatur cumque quaerat ea accusamus sunt facere nostrum corporis exercitationem rerum blanditiis commodi? Inventore fugiat libero ea quas id placeat amet vitae alias recusandae veniam nostrum consectetur ex soluta similique magnam harum delectus earum in maxime, modi quia omnis. Ipsum deleniti illum natus.",
            image: production8,
            alignLeft: false,
        },
    ];

    return (
        <>
            <div className="market-section">
                <div className="overlay"></div>
                <div className="content">
                    <h1 className="market-title">PRODUCTION</h1>
                    <div className="underline"></div>
                    <p className="market-subtitle">HIGH SECURITY PRINTING</p>
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
