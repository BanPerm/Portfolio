import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Presentation from "../Presentation/Presentation";
import About from "../About/About";
import Competence from "../Competence/Competence";
import Project from "../Project/Project";
import './Home.css';

import loadingGif from "../animation/Anim4.gif";

const Home = () => {
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

    useEffect(() => {
        if (!loading) {
            const hash = window.location.hash;
            if (hash) {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    }, [loading]);

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
                    <Presentation />
                    <About />
                    <Competence />
                    <Project />
                </main>
                <footer></footer>
            </>
        )}
        </>
    );
};

export default Home;
