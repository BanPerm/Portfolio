import React, { useState, useEffect } from "react";
import Stage from "../StageExperience/StageExperience";

import loadingGif from "../animation/Anim4.gif";
import Navbar from "../Navbar/Navbar";

const StagePage = () => {
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
                            <Stage />
                        </div>
                    </main>
                    <footer></footer>
                </>
            )}
        </>
    );
};

export default StagePage;
