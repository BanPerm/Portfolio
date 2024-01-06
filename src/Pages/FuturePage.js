import React, { useState, useEffect } from "react";
import loadingGif from "../animation/Anim4.gif";
import Future from "../Future/Future";

import backgroundMusic from '../music/secret.mp3';  // Replace with the correct path

const FuturePage = () => {
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
            const audio = new Audio(backgroundMusic);
            audio.play();

            return () => {
                audio.pause();
                audio.currentTime = 0;
            };
        }
    }, [loading]);

    return (
        <div>
            {loading ? (
                <div className="loader-container">
                    <img src={loadingGif} alt="Loading" style={gifStyles} />
                </div>
            ) : (
                <main>
                    <div className="App">
                        <Future />
                    </div>
                </main>
            )}
        </div>
    );
}

export default FuturePage;
