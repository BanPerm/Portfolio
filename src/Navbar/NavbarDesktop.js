// Navbar.js
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { BiHomeAlt2 } from 'react-icons/bi';
import { FiInfo } from 'react-icons/fi';
import { IoIosApps } from 'react-icons/io';
import { AiOutlineMail } from 'react-icons/ai';
import './Navbar.css';

const NavbarDesktop = () => {
    const [navbarBackground, setNavbarBackground] = useState('transparent');

    useEffect(() => {
        const handleScroll = () => {
            const presentationSection = document.getElementById('presentation');
            const scrollPosition = window.scrollY;

            if (presentationSection && scrollPosition < presentationSection.offsetHeight) {
                setNavbarBackground('transparent');
            } else {
                setNavbarBackground('rgba(51, 51, 51, 0.95)');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="navbar" style={{ backgroundColor: navbarBackground }}>
            <div className="menu">
                <ul className="menuItem">
                    <li>
                        <a href="#about">
                            <BiHomeAlt2 />
                            <span>About</span>
                        </a>
                    </li>
                    <li>
                        <a href="#experience">
                            <FiInfo />
                            <span>Compétences</span>
                        </a>
                    </li>
                    <li>
                        <a href="#project">
                            <IoIosApps />
                            <span>Project</span>
                        </a>
                    </li>
                    <li>
                        <Link to="/contact">
                            <AiOutlineMail />
                            <span>Contact</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavbarDesktop;
