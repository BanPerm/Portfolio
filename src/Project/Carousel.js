import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";
import {useSwipeable } from 'react-swipeable';
import './Carousel.css';

export default function Carroussel(props) {
    const table = props.cards.map((element, index) => {
        return { ...element, onClick: () => setGoToSlide(index) };
    });

    const [offsetRadius, setOffsetRadius] = useState(4);
    const [showArrows, setShowArrows] = useState(false);
    const [goToSlide, setGoToSlide] = useState(null);
    const [cards] = useState(table);

    useEffect(() => {
        setOffsetRadius(props.offset);
        setShowArrows(props.showArrows);
    }, [props.offset, props.showArrows]);

    const handlers = useSwipeable({
        onSwipedLeft: () => setGoToSlide((goToSlide + 1) % cards.length),
        onSwipedRight: () => setGoToSlide((goToSlide - 1 + cards.length) % cards.length),
    });

    return (
        <div style={{ width: props.width, height: props.height, margin: props.margin }} {...handlers}>
            <Carousel
                slides={cards}
                goToSlide={goToSlide}
                offsetRadius={offsetRadius}
                showNavigation={showArrows}
                animationConfig={config.gentle}
            />
        </div>
    );
}
