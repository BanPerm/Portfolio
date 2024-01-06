// Project.jsx

import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Card from "./Card";
import Carousel from "./Carousel";
import Modal from "../Modal/Modal";
import ModalText from "../ModalText/ModalText"; // Import Modal component

const Project = () => {
    const [modalContent, setModalContent] = useState(null);

    const openModal = (image, title, text) => {
        setModalContent({ image, title, text });
    };

    const closeModal = () => {
        setModalContent(null);
    };

    let cards = [
        {
            key: uuid(),
            content: (
                <Card
                    image="./image/Project/Pygame.PNG"
                    title={"Pygame Project"}
                    text={"Les jeux vidéo m'ont plongé dans le monde de la programmation. J'ai ainsi appris le langage Python et exploité la bibliothèque Pygame pour concevoir des jeux en 2D."}
                    onLearnMoreClick={() =>
                        openModal(
                            "./image/Project/Pygame.PNG",
                            "Pygame Project",
                            <ModalText
                                role="Dans mon rôle de programmeur de jeux, j'ai dû élargir mes compétences en apprenant la programmation, en m'initiant au pixel art, et en explorant des domaines variés tels que les mathématiques et la physique pour simuler certaines actions dans le jeu."
                                tech="Python, avec l'utilisation de plusieurs de ses modules tels que Pygame, NumPy, Matplotlib, Tkinter, Keyboard, PyInput, JSON, etc."
                                goal="Mon objectif principal dans la création de jeux est de donner libre cours à ma créativité. Tout ce que je n'ai jamais pu réaliser dans les jeux que j'ai appréciés, je peux le concrétiser. Pour moi, c'est un moyen d'exprimer et d'épanouir ma créativité. La création de jeux représente une opportunité d'apprentissage ludique dans de nombreux domaines. Actuellement, je poursuis la programmation en utilisant Python. Récemment, j'ai entrepris une refonte de mes anciens programmes pour les adapter à ce que j'ai appris à l'IUT. Parallèlement, je m'informe et effectue des tests sur la projection 3D. J'ai jusqu'ici expérimenté des rotations sur des objets simples, mais j'ai l'intention de continuer à progresser afin de créer quelque chose de plus complexe."
                            />
                        )
                    }
                />
            ),
        },
        {
            key: uuid(),
            content: (
                <Card
                    image="./image/Project/AventurierRail.PNG"
                    title={"Aventurier du Rail"}
                    text={"Ce projet est une implémentation du jeu de plateau aventurier du monde en format numérique, nous avons eu à créer la logique du jeu en java et l’interface en javafx."}
                    onLearnMoreClick={() =>
                        openModal(
                            "./image/Project/AventurierRail.PNG",
                            "Aventurier du Rail",
                            <ModalText
                                role="Au sein de ce projet, nous avons travaillé en binôme sur trois périodes distinctes. La première a été dédiée à la conception de la logique du jeu, la deuxième à l'optimisation, et la troisième à l'élaboration de l'interface graphique."
                                tech="Nous avons utilisé GitHub, Java et JavaFX pour mettre en œuvre ce projet."
                                goal="L'objectif principal de ce projet était de recréer fidèlement le jeu de plateau, tout en assimilant les nombreuses règles pour les implémenter de manière optimale. Cela comprenait la création de tests unitaires pour garantir un fonctionnement correct. La phase d'optimisation avait pour but de nous faire travailler sur le parcours de graphe. Enfin, la partie graphique nous a permis de comprendre la vision du client et d'imaginer les meilleures solutions en fonction de ses attentes."
                            />
                        )
                    }
                />
            ),
        },
        {
            key: uuid(),
            content: (
                <Card
                    image="./image/Project/NDI.PNG"
                    title={"Nuit de l'info"}
                    text={"La Nuit de l'info est un événement où nous avons codé un site en environ 15 heures avec une équipe de 9 personnes."}
                    onLearnMoreClick={() =>
                        openModal(
                            "./image/Project/NDI.PNG",
                            "Nuit de l'info",
                            <ModalText
                                role="Lors de la création de ce site statique, ma principale responsabilité était de construire la page d'accueil, mais j'ai également participé à des défis comme celui de Noël."
                                tech="Nous avons utilisé GitHub, CSS, HTML et JavaScript de manière légère."
                                goal="Notre objectif principal était d'avoir un site fonctionnel avec un rendu correct. La complexité résidait dans la nécessité de travailler avec une équipe assez importante. Cependant, en répartissant rapidement les tâches et en formant des binômes pour tirer parti de l'expérience de chacun, nous avons pu non seulement évoluer humainement en collaborant et en aidant les autres, mais aussi améliorer nos techniques de développement en travaillant en binôme."
                            />
                        )
                    }
                />
            ),
        },
        {
            key: uuid(),
            content: (
                <Card
                    image="./image/Project/BD.jpg"
                    title={"Gestion de données"}
                    text={"Dans le cadre d'une SAE, nous avons dû concevoir une base de données et y insérer des données une fois triées en partant d’un Excel."}
                    onLearnMoreClick={() =>
                        openModal(
                            "./image/Project/BD.jpg",
                            "Gestion de données",
                            <ModalText
                                role="Ma principale contribution a été sur la création du modèle entité-association, bien que j'aie participé de manière moindre à la création des scripts d'insertion et de tri des données."
                                tech="Nous avons utilisé DBeaver, OracleSQL, et Looping."
                                goal="Notre objectif était de partir d'une feuille Excel avec des données faussées, des doublons et des incohérences pour concevoir une nouvelle base de données Oracle SQL. Pour ce faire, nous avons analysé les différents types de données stockées afin de créer un modèle E/A nous permettant de restructurer l'ensemble de la base de données existante."
                            />
                        )
                    }
                />
            ),
        },
        {
            key: uuid(),
            content: (
                <Card
                    image="./image/Project/Stageo.PNG"
                    title={"Stageo"}
                    text={"Dans le cadre d'une SAE, nous avons dû créer un site de gestion des stages et des alternances."}
                    onLearnMoreClick={() =>
                        openModal(
                            "./image/Project/Stageo.PNG",
                            "Stageo",
                            <ModalText
                                role="Suivant une approche de projet utilisant les méthodes agiles, j'ai participé à la création de la base de données, au backend avec PHP, ainsi qu'au frontend avec HTML, CSS et dans une moindre mesure, JavaScript."
                                tech="Les outils utilisés comprenaient TailwindCSS, HTML, PHP, PhpMyAdmin, MySQL, Looping, JavaScript, et GitHub."
                                goal="Ce projet visait à nous familiariser avec les méthodes agiles tout en renforçant notre apprentissage de la programmation web, notamment le PHP étudié au cours d'un semestre entier. L'objectif était également de nous enseigner la collaboration sur un projet important, avec des rendus réguliers conformément aux méthodes agiles, et de nous apprendre à gérer les conflits internes. C'est le projet le plus important en termes de durée et de complexité qui m'ait été confié, et cela m'a permis de grandir tant sur le plan humain que technique."
                            />
                        )
                    }
                />
            ),
        },
    ];


    return (
        <div id="project">
            <h1>Project</h1>
            <div className="">
                <Carousel
                    cards={cards.map((card) => ({
                        ...card,
                        content: React.cloneElement(card.content, {
                            onLearnMoreClick: () =>
                                card.content.props.onLearnMoreClick(),
                        }),
                    }))}
                    height="500px"
                    width="100%"
                    margin="0 auto"
                    offset={200}
                    showArrows={false}
                />
                {modalContent && (
                    <Modal
                        image={modalContent.image}
                        title={modalContent.title}
                        text={modalContent.text}
                        onClose={closeModal}
                    />
                )}
            </div>
        </div>
    );
};

export default Project;
