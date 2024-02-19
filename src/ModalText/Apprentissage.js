import React from "react";
import ApprentissageContent from "./ApprentissageContent";
import styles from './Apprentissage.module.css';

const Apprentissage = ({ list }) => {
    return (
        <div className={styles.div}>
            {list && list.map((item, index) => (
                <ApprentissageContent key={index} titre={item.titre} texte={item.texte} />
            ))}
        </div>
    );
};

export default Apprentissage;