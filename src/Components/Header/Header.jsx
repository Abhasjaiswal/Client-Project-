// import React from 'react';
// import './styles.css'; // Create a CSS file to style the header if needed.

// const Header = ({ title, subtitle }) => {
//     return (
//         <div className="header-section">
//             <div className="overlay"></div>
//             <div className="content">
//                 <h1 className="header-title">{title}</h1>
//                 <div className="underline"></div>
//                 <p className="header-subtitle">{subtitle}</p>
//             </div>
//         </div>
//     );
// };

// export default Header;


import React from 'react';
import './styles.css';

const Header = ({ title, subtitle, backgroundImage }) => {
    const sectionStyle = {
        backgroundImage: `url(${backgroundImage})`,
    };

    return (
        <div className="header-section" style={sectionStyle}>
            <div className="overlay"></div>
            <div className="content">
                <h1 className="header-title">{title}</h1>
                <div className="underline"></div>
                <p className="header-subtitle">{subtitle}</p>
            </div>
        </div>
    );
};

export default Header;

