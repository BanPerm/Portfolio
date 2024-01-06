import styles from './Presentation.module.css';

const Presentation = () => {
    return(
        <div className={styles.div} id="presentation">
            <div className={styles.divTexte}>
                <h1>Bonjour, Je suis Peter Poirrier</h1>
                <h3>
                    Etudiant en deuxième année de BUT informatique, spécialisé en conception, développement, et validation d'application.
                    Curieux de nature et persévérant, l'informatique représente pour moi une discipline à la fois stimulante et pleine de surprises
                </h3>
            </div>
        </div>
    )
}

export default Presentation;


