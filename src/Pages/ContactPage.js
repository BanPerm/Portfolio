import React, { useState, useEffect } from "react";
import Contact from "../Contact/Contact";

import loadingGif from "../animation/Anim4.gif"; // Remplacez cela par le chemin correct de votre GIF

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
        <div>
            {loading ? (
                <div className="loader-container">
                    <img src={loadingGif} alt="Loading" style={gifStyles} />
                </div>
            ) : (
                <main>
                    <div className="App">
                        <Contact />
                    </div>
                </main>
            )}
        </div>
    );
};

export default ContactPage;
