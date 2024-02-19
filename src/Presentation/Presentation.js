import styles from './Presentation.module.css';

const Presentation = () => {
    return(
        <div className={styles.div} id="presentation">
            <div className={styles.divTexte}>
                <h1>Bonjour, Je suis Peter Poirrier</h1>
                <h3>
                    Durant mes année de lycée, j'ai été attiré par le monde de la programmation, et cette passion m'a conduit à explorer de nombreux aspects de ce domaine par moi-même. Curieux, autonome et autodidacte, j'ai toujours été fasciné par les possibilités infinies offertes par cet univers
                </h3>
            </div>
        </div>
    )
}

export default Presentation;


