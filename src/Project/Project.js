// Project.jsx

import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Card from "./Card";
import Carousel from "./Carousel";
import Modal from "../Modal/Modal";
import ModalText from "../ModalText/ModalText";
import Apprentissage from "../ModalText/Apprentissage";
import ApprentissageContent from "../ModalText/ApprentissageContent";

const Project = () => {
    const [modalContent, setModalContent] = useState(null);

    const openModal = (image, title, role,tech,goal,know) => {
        setModalContent({ image, title, role,tech,goal,know});
    };

    const closeModal = () => {
        setModalContent(null);
    };

    let cards = [
        {
            key: uuid(),
            content: (
                <Card
                    image="/Portfolio/image/Project/Pygame.PNG"
                    title={"Pygame Project"}
                    text={"Les jeux vidéo m'ont plongé dans le monde de la programmation. J'ai ainsi appris le langage Python et exploité la bibliothèque Pygame pour concevoir des jeux en 2D."}
                    onLearnMoreClick={() =>
                        openModal(
                            "/Portfolio/image/Project/Pygame.PNG",
                            "Pygame Project",
                            "Dans mon rôle de programmeur de jeux, j'ai dû élargir mes compétences en apprenant la programmation, en m'initiant au pixel art, et en explorant des domaines variés tels que les mathématiques et la physique pour simuler certaines actions dans le jeu.",
                            "Python, avec l'utilisation de plusieurs de ses modules tels que Pygame, NumPy, Matplotlib, Tkinter, Keyboard, PyInput, JSON, etc.",
                            "Mon objectif principal dans la création de jeux est de donner libre cours à ma créativité. Tout ce que je n'ai jamais pu réaliser dans les jeux que j'ai appréciés, je peux le concrétiser. Pour moi, c'est un moyen d'exprimer et d'épanouir ma créativité. La création de jeux représente une opportunité d'apprentissage ludique dans de nombreux domaines. Actuellement, je poursuis la programmation en utilisant Python. Récemment, j'ai entrepris une refonte de mes anciens programmes pour les adapter à ce que j'ai appris à l'IUT. Parallèlement, je m'informe et effectue des tests sur la projection 3D. J'ai jusqu'ici expérimenté des rotations sur des objets simples, mais j'ai l'intention de continuer à progresser afin de créer quelque chose de plus complexe.",
                            [
                                { titre: "AC 1.1.4: Création d'interface graphique", texte: "Ayant créer des jeux dans un environnement 2D j'ai eu à créer de nombreuse interface"},
                                { titre: "AC 2.1.1: Analyser les problèmes", texte: "Python nous confronte assez souvent à des problème de ressource pour des programme conséquent si mal penser" }
                            ]
                        )
                    }
                />
            ),
        },
        {
            key: uuid(),
            content: (
                <Card
                    image="/Portfolio/image/Project/AventurierRail.PNG"
                    title={"Aventurier du Rail"}
                    text={"Ce projet est une implémentation du jeu de plateau aventurier du monde en format numérique, nous avons eu à créer la logique du jeu en java et l’interface en javafx."}
                    onLearnMoreClick={() =>
                        openModal(
                            "/Portfolio/image/Project/AventurierRail.PNG",
                            "Aventurier du Rail",
                            "Au sein de ce projet, nous avons travaillé en binôme sur trois périodes distinctes. La première a été dédiée à la conception de la logique du jeu, la deuxième à l'optimisation, et la troisième à l'élaboration de l'interface graphique.",
                            "Nous avons utilisé GitHub, Java et JavaFX pour mettre en œuvre ce projet.",
                            "L'objectif principal de ce projet était de recréer fidèlement le jeu de plateau, tout en assimilant les nombreuses règles pour les implémenter de manière optimale. Cela comprenait la création de tests unitaires pour garantir un fonctionnement correct. La phase d'optimisation avait pour but de nous faire travailler sur le parcours de graphe. Enfin, la partie graphique nous a permis de comprendre la vision du client et d'imaginer les meilleures solutions en fonction de ses attentes.",
                            [
                                { titre: "AC 1.1.2: Élaborer des conceptions simples", texte: "Concevoir la logique du jeu en collaboration avec votre binôme lors de la première période de travail."},
                                { titre: "AC 1.1.3: Faire des essais et évaluer leurs résultats en regard des spécifications", texte: "Mettre en œuvre des tests unitaires pour vérifier que la logique du jeu fonctionne correctement et respecte les règles du jeu de plateau." },
                                { titre: "AC 1.1.4: Développer des interfaces utilisateurs", texte: "Collaborer avec votre binôme pour créer l'interface graphique du jeu en utilisant JavaFX lors de la troisième période de travail." },
                                { titre: "AC 2.1.1: Anticiper les résultats de diverses métriques", texte: "Travailler sur l'optimisation du parcours de graphe pour améliorer les performances du jeu lors de la deuxième période de travail." },
                                { titre: "AC 6.1.2: Organiser son travail en relation avec celui de son équipe", texte: "Travailler en binôme sur différentes phases du projet, en se répartissant les tâches selon les compétences et les préférences de chacun." }
                            ]
                        )
                    }
                />
            ),
        },
        {
            key: uuid(),
            content: (
                <Card
                    image="/Portfolio/image/Project/NDI.PNG"
                    title={"Nuit de l'info"}
                    text={"La Nuit de l'info est un événement où nous avons codé un site en environ 15 heures avec une équipe de 9 personnes."}
                    onLearnMoreClick={() =>
                        openModal(
                            "/Portfolio/image/Project/NDI.PNG",
                            "Nuit de l'info",
                            "Lors de la création de ce site statique, ma principale responsabilité était de construire la page d'accueil, mais j'ai également participé à des défis comme celui de Noël.",
                            "Nous avons utilisé GitHub, CSS, HTML et JavaScript de manière légère.",
                            "Notre objectif principal était d'avoir un site fonctionnel avec un rendu correct. La complexité résidait dans la nécessité de travailler avec une équipe assez importante. Cependant, en répartissant rapidement les tâches et en formant des binômes pour tirer parti de l'expérience de chacun, nous avons pu non seulement évoluer humainement en collaborant et en aidant les autres, mais aussi améliorer nos techniques de développement en travaillant en binôme.",
                            [
                                { titre: "AC 1.1.2: Implémenter des conceptions simples", texte: "Construire la page d'accueil et ce en 15h"},
                                { titre: "AC 6.1.3: Élaborer, gérer et transmettre de l'information", texte: "Partager des connaissances et de l'expérience avec d'autres membres de l'équipe lors de la formation de binômes pour travailler sur différentes parties du site."},
                                { titre: "AC 6.2.2: Organiser son travail en relation avec celui de son équipe", texte: "Répartir rapidement les tâches au sein de l'équipe pour garantir une progression efficace du projet." }
                            ]
                        )
                    }
                />
            ),
        },
        {
            key: uuid(),
            content: (
                <Card
                    image="/Portfolio/image/Project/BD.jpg"
                    title={"Gestion de données"}
                    text={"Dans le cadre d'une SAE, nous avons dû concevoir une base de données et y insérer des données une fois triées en partant d’un Excel."}
                    onLearnMoreClick={() =>
                        openModal(
                            "/Portfolio/image/Project/BD.jpg",
                            "Gestion de données",
                            "Ma principale contribution a été sur la création du modèle entité-association, bien que j'aie participé de manière moindre à la création des scripts d'insertion et de tri des données.",
                            "Nous avons utilisé DBeaver, OracleSQL, et Looping.",
                            "Notre objectif était de partir d'une feuille Excel avec des données faussées, des doublons et des incohérences pour concevoir une nouvelle base de données Oracle SQL. Pour ce faire, nous avons analysé les différents types de données stockées afin de créer un modèle E/A nous permettant de restructurer l'ensemble de la base de données existante.",
                            [
                                { titre: "AC 1.1.2: Élaborer des conceptions simples", texte: "Créer un modèle entité-association pour structurer la base de données Oracle SQL à partir des données Excel fournies."},
                                { titre: "AC 2.1.4: Évaluer l’impact environnemental et sociétal des solutions proposées", texte: "Évaluer les avantages écologiques et sociaux de la restructuration de la base de données pour optimiser les performances et réduire les doublons et les incohérences." },
                                { titre: "AC 6.1.2: Organiser son travail en relation avec celui de son équipe", texte: "Collaborer avec d'autres membres de l'équipe pour intégrer le modèle entité-association dans la base de données Oracle SQL et s'assurer de sa cohérence avec les scripts d'insertion et de tri des données." }
                            ]
                        )
                    }
                />
            ),
        },
        {
            key: uuid(),
            content: (
                <Card
                    image="/Portfolio/image/Project/Stageo.PNG"
                    title={"Stageo"}
                    text={"Dans le cadre d'une SAE, nous avons dû créer un site de gestion des stages et des alternances."}
                    onLearnMoreClick={() =>
                        openModal(
                            "/Portfolio/image/Project/Stageo.PNG",
                            "Stageo",
                            "Suivant une approche de projet utilisant les méthodes agiles, j'ai participé à la création de la base de données, au backend avec PHP, ainsi qu'au frontend avec HTML, CSS et dans une moindre mesure, JavaScript.",
                            "Les outils utilisés comprenaient TailwindCSS, HTML, PHP, PhpMyAdmin, MySQL, Looping, JavaScript, et GitHub.",
                            "Ce projet visait à nous familiariser avec les méthodes agiles tout en renforçant notre apprentissage de la programmation web, notamment le PHP étudié au cours d'un semestre entier. L'objectif était également de nous enseigner la collaboration sur un projet important, avec des rendus réguliers conformément aux méthodes agiles, et de nous apprendre à gérer les conflits internes. C'est le projet le plus important en termes de durée et de complexité qui m'ait été confié, et cela m'a permis de grandir tant sur le plan humain que technique.",
                            [
                                { titre: "AC 1.1.1: Implémenter des conceptions simples", texte: "Participer à la création de la base de données, du backend avec PHP, et du frontend avec HTML et CSS."},
                                { titre: "AC 1.1.4: Développer des interfaces utilisateurs", texte: "Contribuer à la création de l'interface utilisateur en utilisant HTML, CSS, et JavaScript." },
                                { titre: "AC 6.1.1: Appréhender l’écosystème numérique", texte: "Utiliser des outils de collaboration comme GitHub pour travailler en équipe sur le projet." },
                                { titre: "AC 6.1.3: Identifier les statuts, les fonctions et les rôles de chaque membre d’une équipe pluridisciplinaire", texte: "Reconnaître les rôles de chacun dans l'équipe agile et collaborer efficacement avec les membres pour atteindre les objectifs du projet." },
                                { titre: "AC 6.1.4: Acquérir les compétences interpersonnelles pour travailler en équipe", texte: "Apprendre à gérer les conflits internes et à travailler de manière collaborative pour résoudre les problèmes rencontrés lors du développement de l'application." }
                            ]
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
                        role={modalContent.role}
                        tech={modalContent.tech}
                        goal={modalContent.goal}
                        know={modalContent.know}
                        onClose={closeModal}
                    />
                )}
            </div>
        </div>
    );
};

export default Project;
