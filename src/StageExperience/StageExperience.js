import React from "react";
import style from './StageExperience.module.css';

const ExperienceCard = ({ experience }) => {
    return (
        <div className={style.experienceCard}>
            <h2>{experience.company}</h2>
            <p className={style.roleDuration}>{experience.role} - {experience.duration}</p>
            <p>{experience.description}</p>
            <h3>Technologies utilisées</h3>
            <ul>
                {experience.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>
            <h3>Responsabilités principales</h3>
            <ul>
                {experience.tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
            <h3>Objectifs du Stage</h3>
            <p>{experience.objectives}</p>
            <h3>Compétences acquises</h3>
            <ul>
                {experience.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
            <h3>Bilan du Stage</h3>
            <p>{experience.conclusion}</p>
        </div>
    );
};

const StageExperiencePage = () => {
    const experiences = [
        {
            id: 1,
            company: "Lundi Matin",
            role: "Développeur Logiciel",
            duration: "Stage de 6 mois",
            description: "Développement d'applications web, maintenance, et gestion de projet Agile au sein d'une équipe de 3 personnes.",
            technologies: ["Vue.js", "PHP", "Tuleap"],
            tasks: [
                "Création de nouvelles pages, options et menus pour l'application web",
                "Maintenance et gestion des tickets via Tuleap",
                "Amélioration de fonctionnalités existantes, comme l'exportation en XML",
                "Utilisation de Vue.js pour la conception front-end et PHP pour la gestion back-end",
            ],
            objectives: "Renforcer les compétences en développement web full-stack et en gestion Agile au sein d'une équipe de petite taille.",
            skills: [
                "Développement web avec Vue.js et PHP",
                "Exposition aux méthodologies Agile (sprints, rapports quotidiens, et travail d'équipe)",
                "Pratique de la gestion de tickets et du contrôle de version avec Tuleap",
                "Amélioration des processus de développement avec de nouvelles fonctionnalités et l'optimisation de l'existant",
            ],
            conclusion: "Ce stage a été une première expérience professionnelle en programmation qui m'a permis de renforcer mes compétences en développement web avec Vue.js et PHP, tout en découvrant le travail en équipe Agile dans un contexte réel.",
        },
    ];

    return (
        <div className={style.container}>
            <h1>Mes Expériences de Stage</h1>
            <div className={style.experiencesList}>
                {experiences.map((exp) => (
                    <ExperienceCard key={exp.id} experience={exp} />
                ))}
            </div>
        </div>
    );
};

export default StageExperiencePage;
