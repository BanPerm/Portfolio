import React, { useState, useEffect } from "react";
import loadingGif from "../animation/Anim4.gif";
import Future from "../Future/Future";

import backgroundMusic from '../music/secret.mp3';  // Remplacer par le chemin correct

const FuturePage = () => {
    const [loading, setLoading] = useState(true);
    const [audioPlayed, setAudioPlayed] = useState(false);

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

    const handlePlayMusic = () => {
        if (!audioPlayed) {
            const audio = new Audio(backgroundMusic);
            audio.play();
            setAudioPlayed(true);  // Musique déjà jouée
        }
    };

    useEffect(() => {
        if (!loading) {
            const events = ['click', 'keydown', 'touchstart'];

            const startAudio = () => {
                handlePlayMusic();
                events.forEach((event) => window.removeEventListener(event, startAudio));
            };

            events.forEach((event) => window.addEventListener(event, startAudio));

            return () => {
                events.forEach((event) => window.removeEventListener(event, startAudio));
            };
        }
    }, [loading, audioPlayed]);

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
};

export default FuturePage;
