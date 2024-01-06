// Navbar.js
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';
import {useEffect, useState} from "react";

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 630);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {isMobile ? <NavbarMobile /> : <NavbarDesktop />}
            <div style={{ position: 'fixed', top: 7, right: 10, padding: '10px', zIndex:101, display:"flex" }}>
                <a href="https://www.linkedin.com/in/poirrierp/"><img src="/image/reseau/linkedin.png" style={{ width: '35px', height: '35px', marginRight:'10px' }} /></a>
                <a href="https://github.com/BanPerm"><img src="/image/reseau/github.png" style={{ width: '35px', height: '35px' }} /></a>
            </div>
        </>
    );
};

export default Navbar;
