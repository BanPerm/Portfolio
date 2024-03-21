import styles from './Presentation.module.css';

const Presentation = () => {
    return(
        <div className={styles.div} id="presentation">
            <div className={styles.divTexte}>
                <h1>Bonjour, Je suis Peter Poirrier</h1>
                <h3>
                    Curieux, autonome et autodidacte, j'ai toujours été fasciné par les possibilités infinies offertes par l'univers de la programmation
                </h3>
            </div>
        </div>
    )
}

export default Presentation;


