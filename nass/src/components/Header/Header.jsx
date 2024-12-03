import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <section className="h-wrapper paddings">
            <div className="flexCenter innerWidth h-container">
                <img src="./logo.png" alt="logo" width={100} />

                <div className={`flexCenter h-menu ${isMenuOpen ? 'open' : ''}`}>
                    <a href="https://nasstechnologies.com/">Home</a>
                    <a href="https://www.nasstechnologies.com/about.aspx">About Us</a>
                    <a href="https://nasstechnologies.com/our-service.aspx">Services</a>
                </div>

                <div className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </section>
    );
};

export default Header;
