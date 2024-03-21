import React, { useEffect, useState } from 'react';
import './Competence.css';

const Competence = () => {
    const [animationApplied, setAnimationApplied] = useState(false);

    useEffect(() => {
        const scrollers = document.querySelectorAll(".scroller");

        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && !animationApplied) {
            addClone(scrollers);
            addAnimation(scrollers);
            setAnimationApplied(true);
        }
    }, [animationApplied]);

    function addClone(scrollers) {
        scrollers.forEach((scroller) => {
            if (scroller.getAttribute("data-animated") === "true") {
                return;
            }

            scroller.setAttribute("data-animated", true);

            const scrollerInner = scroller.querySelector(".scroller__inner");
            const scrollerContent = Array.from(scrollerInner.children);
            const fragment = document.createDocumentFragment();

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute("clone", "true");
                fragment.appendChild(duplicatedItem);
            });

            // Ajoutez le fragment au début de la liste
            scrollerInner.insertBefore(fragment, scrollerInner.firstChild);
        });
    }

    function addAnimation(scrollers) {
        scrollers.forEach((scroller) => {
            if (scroller.getAttribute("data-animated") === "true") {
                return;
            }

            const scrollerInner = scroller.querySelector(".scroller__inner");

            scrollerInner.style.animation = `scroll var(--_animation-duration, 40s) var(--_animation-direction, forwards) linear infinite`;
        });
    }

    return (
        <div id="experience">
            <h1>Compétences</h1>
            <div className="scroller" data-speed="fast">
                <ul className="tag-list scroller__inner">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>Tailwind</li>
                    <li>PHP</li>
                    <li>Python</li>
                    <li>C</li>
                    <li>Java</li>
                    <li>MySQL</li>
                    <li>Oracle SQL</li>
                    <li>PLSQL</li>
                </ul>
            </div>
            <div className="scroller" data-direction="right" data-speed="slow">
                <div className="scroller__inner">
                    <img src="/Portfolio/image/langage/htmlpng.png" alt="" />
                    <img src="/Portfolio/image/langage/CSS.svg" alt="" />
                    <img src="/Portfolio/image/langage/js.png" alt="" />
                    <img src="/Portfolio/image/langage/react.png" alt="" />
                    <img src="/Portfolio/image/langage/tailwindcss.png" alt="" />
                    <img src="/Portfolio/image/langage/PHP.png" alt="" />
                    <img src="/Portfolio/image/langage/python.png" alt="" />
                    <img src="/Portfolio/image/langage/c.png" alt="" />
                    <img src="/Portfolio/image/langage/Java.png" alt="" />
                    <img src="/Portfolio/image/langage/mysql.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Competence;
