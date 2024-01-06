// Card.jsx

import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Styles from "./Card.module.css";

function Card({ image, title, text, onLearnMoreClick }) {
    const [show, setShown] = useState(false);

    const props3 = useSpring({
        opacity: 1,
        transform: show ? "scale(1.03)" : "scale(1)",
        boxShadow: show
            ? "0 20px 25px rgb(0 0 0 / 25%)"
            : "0 2px 10px rgb(0 0 0 / 8%)",
    });

    return (
        <animated.div
            className={Styles.card}
            style={props3}
            onMouseEnter={() => setShown(true)}
            onMouseLeave={() => setShown(false)}
        >
            <img src={image} alt="" />
            <h2>{title}</h2>
            <p>{text}</p>
            <button className={Styles.button} onClick={onLearnMoreClick}>En savoir plus</button>
        </animated.div>
    );
}

export default Card;
