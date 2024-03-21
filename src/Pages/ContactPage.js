import React, { useState, useEffect } from "react";
import Contact from "../Contact/Contact";

import loadingGif from "../animation/Anim4.gif";
import Navbar from "../Navbar/Navbar"; // Remplacez cela par le chemin correct de votre GIF

const ContactPage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fakeLoading = setTimeout(() => {
            setLoading(false);
        }, 1375);

        return () => clearTimeout(fakeLoading);
    }, []);

    const gifStyles = {
        width: "200px",
        height: "200px",
    };

    return (
        <>
            {loading ? (
                <div className="loader-container">
                    <img src={loadingGif} alt="Loading" style={gifStyles} />
                </div>
            ) : (
                <>
                    <header></header>
                    <Navbar/>
                    <main>
                        <div className="App">
                            <Contact />
                        </div>
                    </main>
                    <footer></footer>
                </>
            )}
        </>
    );
};

export default ContactPage;
