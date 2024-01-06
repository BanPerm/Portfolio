// NavbarMobile.js
import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { BiHomeAlt2 } from 'react-icons/bi';
import { FiInfo } from 'react-icons/fi';
import { IoIosApps } from 'react-icons/io';
import { AiOutlineMail } from 'react-icons/ai';
import { useClickAway } from 'react-use';
import { Squash as Hamburger } from 'hamburger-react';
import './NavbarMobile.css';

const NavMobile = () => {
    const [isOpen, setOpen] = useState(false);
    const ref = useRef(null);

    useClickAway(ref, () => setOpen(false));

    return (
        <nav className="navbarMobile">
            <div ref={ref} className="hidden lg:block">
                <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
                {isOpen && (
                    <ul className="menuItemMobile">
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
                            <NavLink to="/contact" activeClassName="active">
                                <AiOutlineMail />
                                <span>Contact</span>
                            </NavLink>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default NavMobile;
