import React from "react";
import './StageExperience.module.css';

const StageExperiencePage = () => {
    const experiences = [
        {
            id: 1,
            company: "Lundi Matin",
            role: "Développeur Logiciel",
            duration: "Stage de 6 mois",
            description: "Développement d'applications web, optimisation des algorithmes, et gestion de projet agile.",
            technologies: ["React.js", "Node.js", "C++", "Git"],
            tasks: [
                "Développement d'applications web en React et Node.js",
                "Optimisation de performances backend avec C++",
                "Gestion du code source avec Git",
            ],
            objectives: "Renforcer les compétences full-stack et optimiser les processus de développement.",
            skills: [
                "Amélioration des compétences en React, Node.js et C++",
                "Optimisation du temps d'exécution et gestion de la mémoire",
                "Expérience avec la méthodologie Agile",
            ],
            conclusion: "Stage enrichissant pour développer des compétences techniques et de gestion de projet.",
        },
    ];

    return (
        <div className="experience-container">
            <h1>Mes Expériences de Stage</h1>

            <div className="experiences-list">
                {experiences.map((exp) => (
                    <div className="experience-card" key={exp.id}>
                        <h2>{exp.company}</h2>
                        <p className="role-duration">{exp.role} - {exp.duration}</p>
                        <p>{exp.description}</p>
                        <h3>Technologies utilisées</h3>
                        <ul>
                            {exp.technologies.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                        </ul>
                        <h3>Responsabilités principales</h3>
                        <ul>
                            {exp.tasks.map((task, index) => (
                                <li key={index}>{task}</li>
                            ))}
                        </ul>
                        <h3>Objectifs du Stage</h3>
                        <p>{exp.objectives}</p>
                        <h3>Compétences acquises</h3>
                        <ul>
                            {exp.skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                        <h3>Bilan du Stage</h3>
                        <p>{exp.conclusion}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StageExperiencePage;
