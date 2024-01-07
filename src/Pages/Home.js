import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Presentation from "../Presentation/Presentation";
import About from "../About/About";
import Competence from "../Competence/Competence";
import Project from "../Project/Project";
import './Home.css';

import loadingGif from "../animation/Anim4.gif";
import {Link} from "react-router-dom";

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

    return (
        <div>
            {loading ? (
                <div className="loader-container">
                    <img src={loadingGif} alt="Loading" style={gifStyles} />
                </div>
            ) : (
                <div>
                    <header>
                        <Navbar />
                    </header>
                    <main>
                        <div className="App">
                            <Presentation />
                            <About />
                            <Competence />
                            <Project />
                            <div className="futureBottom">
                                <Link to="/Portfolio/future">...</Link>
                            </div>
                        </div>
                    </main>
                </div>
            )}
        </div>
    );
};

export default Home;
