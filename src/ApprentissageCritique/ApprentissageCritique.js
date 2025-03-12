import React from "react";
import style from './ApprentissageCritique.module.css';

const LearningCard = ({ title, description, projects, skills, technologies }) => {
    return (
        <div className={style.learningCard}>
            <h2>{title}</h2>
            <p>{description}</p>
            <h3>Projets associés</h3>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>{project}</li>
                ))}
            </ul>
        </div>
    );
};

const ApprentissagesCritiquesPage = () => {
    const learningData = [
        {
            id: 1,
            title: "3.9.2 : Programmation et gestion de la sécurité des données",
            description: "Ce projet m'a permis de travailler sur la gestion sécurisée des données, notamment la protection des informations sensibles et la gestion des droits d'accès.",
            projects: [
                "Création d'une plateforme sécurisée pour l'échange de données",
                "Mise en place de l'authentification à double facteur pour les utilisateurs"
            ],
        },
        {
            id: 2,
            title: "3.8.1 : Développement de solutions web dynamiques et interactives",
            description: "Lors de ce projet, j'ai développé des solutions web interactives utilisant des technologies modernes, avec un fort accent sur l'expérience utilisateur.",
            projects: [
                "Développement d'une application web dynamique avec Vue.js",
                "Création d'une interface utilisateur réactive avec des API externes"
            ],
        },
    ];

    return (
        <div className={style.container}>
            <h1 className={style.title}>Apprentissages Critiques</h1>
            <div className={style.learningList}>
                {learningData.map((learning) => (
                    <LearningCard
                        key={learning.id}
                        title={learning.title}
                        description={learning.description}
                        projects={learning.projects}
                        skills={learning.skills}
                        technologies={learning.technologies}
                    />
                ))}
            </div>
        </div>
    );
};

export default ApprentissagesCritiquesPage;
