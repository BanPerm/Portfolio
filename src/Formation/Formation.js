import style from './Formation.module.css';
const Formation = () => {
    return(
        <div className={style.doubleBorderWrapper}>
            <div className={style.body}>
                <div className={style.formation}>
                    <h2>Baccalauréat Général</h2>
                    <p>En 2022, j'ai décroché mon baccalauréat avec mention bien, optant pour une spécialité en mathématiques, physiques-chimie et science de la vie et de la Terre.</p>
                </div>
                <div className={style.formation}>
                    <h2>BUT Informatique</h2>
                    <p>Actuellement en 3e année d'IUT Informatique, je me suis orienté vers la spécialité Conception d'Applications (RACDV).</p>
                </div>
            </div>
        </div>
    )
}

export default Formation;

