import React from 'react';
import styles from './About.module.css';
import DownloadPDF from "../DownloadPDF/DowloadPDF";
import Formation from "../Formation/Formation";

const About = () => {
    const downloadStyle = {
        padding: '10px',
    };
    const pdfUrl = '/Portfolio/CV.pdf';
    return (
        <div className={styles.div} id="about">
            <h1>About</h1>
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <img src="/Portfolio/image/jeux-video.png" alt="jeux video" />
                    <p>
                        Fan de jeux vidéo depuis mon enfance, comme beaucoup d'autres, j'ai toujours cherché à approfondir mes connaissances, allant jusqu'à essayer de développer mes propres jeux. L'univers vidéoludique est bien plus qu'une simple passion pour moi ; c'est une source constante d'inspiration qui enrichit mon quotidien d'étudiant. La création de jeux devient ainsi un moyen captivant de fusionner ma curiosité technologique avec ma passion pour ceux-ci.
                    </p>
                </li>
                <li className={styles.li}>
                    <img src="/Portfolio/image/manga.png" alt="manga" />
                    <p>
                        Je nourris une passion pour les mangas en tout genre. Plonger dans des univers fantastiques, suivre des héros épiques ou pas et explorer des histoires captivantes me procure une évasion bienvenue. Les mangas, tout comme les jeux vidéo, représentent pour moi une source inépuisable d'inspiration qui élargit constamment mon horizon créatif, m'apportant une inspiration quotidienne et enrichissante.
                    </p>
                </li>
            </ul>
            <Formation/>
            <div className={styles.buttonContainer}>
                <DownloadPDF
                    documentUrl={pdfUrl}
                    documentName="CV"
                    label="Télécharger mon CV"
                    style={downloadStyle}
                />
            </div>
        </div>
    );
};

export default About;
