// NavbarMobile.js
import React, { useState, useRef } from 'react';
import {Link, NavLink} from 'react-router-dom';
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
                            <Link to="/Portfolio#about">
                                <BiHomeAlt2 />
                                <span>About</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Portfolio#experience">
                                <FiInfo />
                                <span>Compétences</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Portfolio#project">
                                <IoIosApps />
                                <span>Project</span>
                            </Link>
                        </li>
                        <li>
                            <NavLink to="/Portfolio/contact">
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
