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
                        En dehors de la programmation, je suis également un grand amateur de jeux vidéo, une passion que je nourris depuis mon enfance. Cette fascination pour les jeux vidéo m'a même poussé à essayer de développer mes propres jeux, fusionnant ainsi ma passion pour la création interactive avec mon amour des jeux.
                    </p>
                </li>
                <li className={styles.li}>
                    <img src="/Portfolio/image/manga.png" alt="manga" />
                    <p>
                        Par ailleurs, je suis également un fervent lecteur de mangas. Plonger dans des mondes fantastiques, suivre des histoires riches en émotions et vivre l’aventure de héro épique ou non. Les mangas, tout comme la programmation et les jeux vidéo, représentent pour moi une source inépuisable d'inspiration qui nourrit ma créativité et stimule ma curiosité
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
