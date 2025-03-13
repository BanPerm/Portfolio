import React, { useState } from "react";
import style from './ApprentissageCritique.module.css';

const LearningCard = ({ title, description, projects, skills, proof, skillsLinks, paragraphes }) => (
    <div className={style.learningCard}>
        <h2>{title}</h2>
        <p>{description}</p>

        {paragraphes?.length > 0 && (
            <div className={style.section}>
                <h3>Paragraphes associés</h3>
                {paragraphes.map((paragraphe, index) => (
                    <div key={index}>
                        <h4>{paragraphe.title}</h4>
                        <p>{paragraphe.content}</p>
                        <p><strong>{paragraphe.CE}</strong></p> {}
                    </div>
                ))}
            </div>
        )}

        {projects?.length > 0 && (
            <div className={style.section}>
                <h3>Projets associés</h3>
                <ul>
                    {projects.map((project, index) => (
                        <li key={index}>{project}</li>
                    ))}
                </ul>
            </div>
        )}

        {proof?.length > 0 && (
            <div className={style.section}>
                <h3>Preuves associées</h3>
                <div className={style.proofContainer}>
                    {proof.map((item, index) => (
                        <img key={index} src={item} alt={`Preuve ${index + 1}`} className={style.proofImage} />
                    ))}
                </div>
            </div>
        )}

        {(skills?.length > 0 || skillsLinks?.length > 0) && (
            <div className={`${style.section} ${style.skillsSection}`}>
                <h3>Compétences Essentielles et Liens</h3>
                <ul>
                    {skills?.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                    {skillsLinks?.map((link, index) => (
                        <li key={index}>{link}</li>
                    ))}
                </ul>
            </div>
        )}
    </div>
);


const Tab = ({ label, active, onClick }) => (
    <button className={`${style.tab} ${active ? style.active : ""}`} onClick={onClick}>{label}</button>
);

const ApprentissagesCritiquesPage = () => {
    const [activeTab, setActiveTab] = useState("Réaliser");
    const learningData = [
        {
            "theme": "Réaliser",
            "ACS": [
                {
                    "id": 1,
                    "title": "AC 1 - Choisir et implémenter les architectures adaptées",
                    "description": "Dans le cadre du développement de mon moteur d'échecs, j'ai choisi d'implémenter l'algorithme Minimax avec élagage alpha-bêta pour la recherche des meilleurs coups. Ce choix a été guidé par la nécessité d'optimiser l'exploration de l'espace de recherche tout en garantissant des résultats précis.",
                    "paragraphes": [
                        {
                            "title": "Choix de l'algorithme Minimax avec élagage alpha-bêta",
                            "content": "J'ai décidé d'utiliser l'algorithme Minimax pour évaluer les positions du jeu. Afin d'optimiser l'exploration de l'espace de recherche, j'ai implémenté l'élagage alpha-bêta. Ce dernier permet de réduire le nombre de nœuds explorés, ce qui améliore les performances du moteur. Cette approche a été validée après une étude comparative approfondie des différents algorithmes utilisés dans les moteurs d'échecs open-source.",
                            "CE": "CE1.06 | En choisissant les ressources techniques appropriées"
                        },
                        {
                            "title": "Intégration de la recherche de quiescence",
                            "content": "Afin d'éviter l'effet d'horizon dans l'algorithme Minimax, j'ai intégré une recherche de quiescence. Cela permet d'approfondir l'exploration dans des situations complexes, comme les prises multiples, et d'éviter les faux résultats dans des positions dangereuses.",
                            "CE": "CE1.03 | En appliquant des principes algorithmiques complexes"
                        }
                    ],
                    "proof": [
                        "/Portfolio/image/Project/Pygame.PNG",
                        "/Portfolio/image/Project/Minimax_AlphaBeta_Integration.PNG"
                    ]
                },
                {
                    "id": 2,
                    "title": "AC 2 - Qualité du code et documentation",
                    "description": "L'objectif principal était de rendre le back-end plus modulable et d'améliorer la performance et la maintenabilité du code, tout en optimisant l'ergonomie du front-end.",
                    "paragraphes": [
                        {
                            "title": "Refactorisation du back-end",
                            "content": "J'ai refactorisé le back-end du moteur d'échecs pour améliorer la modularité et la performance des requêtes. Cela a permis de mieux structurer le code, d'augmenter sa maintenabilité et de faciliter les tests unitaires. Cette refonte a contribué à rendre l'application plus évolutive et flexible pour les futures améliorations.",
                            "CE": "CE1.04 | En garantissant une architecture modulable et bien documentée"
                        },
                        {
                            "title": "Optimisation du front-end et de l'ergonomie",
                            "content": "Sur le front-end, j'ai amélioré l'ergonomie et la réactivité de l'interface en intégrant des interactions dynamiques. Ces améliorations ont permis d'offrir une expérience utilisateur plus fluide et intuitive.",
                            "CE": "CE1.01 | En respectant les besoins du client pour améliorer l'ergonomie"
                        }
                    ],
                    "proof": [
                        "/Portfolio/image/Project/Code_Refactorisation.PNG",
                        "/Portfolio/image/Project/Ergonomie_FrontEnd.PNG"
                    ]
                },
                {
                    "id": 3,
                    "title": "AC 3 - Intégrer des solutions dans un environnement de production",
                    "description": "J'ai intégré mon moteur d'échecs au protocole UCI pour le rendre compatible avec des interfaces reconnues comme CuteChess.",
                    "paragraphes": [
                        {
                            "title": "Intégration avec le protocole UCI",
                            "content": "J'ai effectué une étude approfondie des spécifications du protocole UCI (Universal Chess Interface) afin d'intégrer mon moteur de manière fluide avec des interfaces comme CuteChess. Cette intégration a nécessité la mise en place de tests pour garantir la conformité du moteur aux spécifications du protocole.",
                            "CE": "CE1.01 | En respectant les exigences du client concernant la compatibilité UCI"
                        },
                        {
                            "title": "Tests de performance et documentation",
                            "content": "Des tests de performance ont été réalisés pour assurer que l'intégration au protocole UCI n'affecte pas la réactivité du moteur. J'ai aussi documenté le processus d'intégration pour faciliter la maintenance et la compréhension de cette partie du projet.",
                            "CE": "CE1.04 | En documentant les processus d'intégration et de test"
                        }
                    ],
                    "proof": [
                        "/Portfolio/image/Project/UCI_Integration_Logs.PNG",
                        "/Portfolio/image/Project/Performance_Tests_UCI.PNG"
                    ]
                }
            ]
        },
        {
            "theme": "Collaborer",
            "ACS": [
                {
                    "id": 4,
                    "title": "AC 1 - Organiser et partager une veille numérique",
                    "description": "J'ai suivi les évolutions des techniques d'IA appliquées aux échecs et partagé mes recherches sur les algorithmes et les meilleures pratiques avec mon équipe.",
                    "paragraphes": [
                        {
                            "title": "Suivi des évolutions des techniques d'IA",
                            "content": "Pour suivre l'évolution des techniques d'IA appliquées aux échecs, j'ai mis en place un système de benchmark permettant d'analyser plusieurs métriques essentielles : temps de calcul, nombre de nœuds explorés, profondeur atteinte, etc. Ces indicateurs ont été cruciaux pour évaluer l'impact des optimisations récentes, notamment l'implémentation des tables de transposition et l'intégration de l'algorithme MVV-LVA (Most Valuable Victim-Least Valuable Attacker). En suivant ces évolutions, j'ai pu mesurer l'efficacité des modifications apportées et identifier les domaines nécessitant encore des améliorations.",
                            "CE": "CE6.01 | En inscrivant sa démarche au sein d’une équipe pluridisciplinaire"
                        },
                        {
                            "title": "Partage des ressources avec l'équipe",
                            "content": "J'ai régulièrement partagé mes recherches et mes découvertes concernant les algorithmes d'optimisation et les meilleures pratiques de codage avec l'équipe. Ces échanges ont facilité les discussions sur les choix techniques à adopter, la priorisation des tâches, ainsi que la compréhension des complexités liées à certaines optimisations. Le partage de ces informations a aussi permis d'améliorer la cohésion de l'équipe en assurant une meilleure coordination des efforts, ce qui a contribué à une meilleure intégration des nouvelles fonctionnalités.",
                            "CE": "CE6.04 | En développant une communication efficace et collaborative"
                        }
                    ],
                    "proof": [
                        "/Portfolio/image/Project/Pygame.PNG"
                    ]
                },
                {
                    "id": 5,
                    "title": "AC 2 - Identifier les enjeux de l'économie de l'innovation numérique",
                    "description": "J'ai analysé l'impact des algorithmes d'IA sur l'industrie du jeu en ligne, en évaluant leur compétitivité et en proposant des solutions adaptées aux besoins du marché.",
                    "paragraphes": [
                        {
                            "title": "Analyse des enjeux économiques",
                            "content": "L'innovation numérique transforme profondément les modèles économiques traditionnels, et l'IA n'échappe pas à cette règle. Dans le cadre de notre projet de développement d'un moteur d'échecs, j'ai analysé l'impact des algorithmes avancés sur l'industrie du jeu en ligne, particulièrement en termes de compétitivité et de réduction des coûts. La maîtrise de ces technologies nous permet de proposer un moteur d'échecs performant, capable de rivaliser avec des solutions commerciales existantes, tout en garantissant une meilleure accessibilité et une évolution rapide en réponse aux besoins des utilisateurs. Cette analyse économique m’a permis d'accompagner l'intégration des nouvelles technologies et des optimisations, garantissant que les choix techniques étaient alignés avec les besoins du marché et les objectifs économiques du projet.",
                            "CE": "CE6.02 | En accompagnant la mise en œuvre des évolutions informatiques"
                        }
                    ],
                    "proof": [
                        "/Portfolio/image/Project/Pygame.PNG"
                    ]
                },
                {
                    id: 6,
                    title: "AC 3 - Guider la conduite du changement informatique",
                    description: "J'ai participé à l'accompagnement du changement lors de la migration vers le nouveau moteur, en documentant les nouvelles fonctionnalités et en formant l'équipe aux nouveaux outils.",
                    "paragraphes": [
                        {
                            "title": "Accompagnement de la transition technique",
                            "content": "Lors de la migration vers le nouveau moteur d'échecs, j'ai activement participé à l'accompagnement du changement. Cela comprenait la rédaction de la documentation technique sur les nouvelles fonctionnalités, la formation de l'équipe aux outils mis à jour, ainsi que la gestion des retours utilisateurs pour améliorer en continu le système. Cette transition a permis à l'équipe de s'adapter rapidement aux nouvelles pratiques et d’assurer une meilleure efficacité dans le développement. Afin de garantir une adoption réussie du changement au sein de l'équipe, nous avons organisé des réunions régulières pour discuter des mises à jour, des nouveaux objectifs et des ajustements nécessaires. Ces échanges ont permis de maintenir une bonne communication et ont facilité la gestion des résistances au changement. Grâce à cette approche collaborative, la transition s'est déroulée de manière fluide et l'adhésion de l'équipe a été renforcée.",
                            "CE": "CE6.02 | En accompagnant la mise en œuvre des évolutions informatiques"
                        }
                    ],
                    "proof": [
                        "/Portfolio/image/Project/Pygame.PNG"
                    ]
                },
                {
                    id: 7,
                    title: "AC 4 - Participer activement à l'amélioration continue",
                    description: "J'ai contribué à l'amélioration continue en recueillant les retours de l'équipe sur le moteur d'échecs et en intégrant des améliorations basées sur ces retours, ainsi qu'en proposant des ajustements pour améliorer la collaboration au sein de l'équipe.",
                    paragraphes: [
                        {
                            "title": "Amélioration continue du projet",
                            "content": "J'ai contribué au suivi du projet en utilisant une approche Agile avec des sprints définis et des objectifs clairs. Ce processus a permis de structurer l'avancement du travail, de garantir la transparence et de réajuster les priorités en fonction des résultats obtenus. Dans le cadre de la gestion du projet, j'ai identifié les risques potentiels, tels que les bugs critiques ou les retards dans l'implémentation de certaines fonctionnalités. Pour chaque risque, j'ai proposé des solutions préventives afin de les atténuer, ce qui a permis de respecter les délais de livraison du moteur. Cette gestion proactive a été essentielle pour garantir la qualité du produit final et la satisfaction des parties prenantes. La mise en œuvre d'une gestion de projet Agile a facilité l'adaptation continue aux nouvelles exigences et améliorations, permettant de suivre de manière optimale l'évolution du projet tout en répondant aux besoins de l'équipe et du client.",
                            "CE": "CE6.02 | En accompagnant la mise en œuvre des évolutions informatiques"
                        }
                    ],
                    proof: [
                        "/Portfolio/image/Project/Pygame.PNG"
                    ]
                }
            ]
        },
        {
            "theme": "Optimiser",
            "ACS": [
                {
                    "id": 1,
                    "title": "AC 1 - Anticiper les résultats de diverses métriques",
                    "description": "Mesure et optimisation des performances du moteur d'échecs à travers l'analyse de différentes métriques.",
                    "paragraphes": [
                        {
                            "title": "Mesure et optimisation des performances",
                            "content": "Pour évaluer la performance du moteur, nous avons utilisé plusieurs outils de profilage comme Valgrind pour détecter les fuites de mémoire et Perf pour analyser l'utilisation des ressources. Ces analyses nous ont permis de localiser les goulots d'étranglement et d'optimiser les fonctions les plus coûteuses en termes de temps d'exécution. Ces optimisations ont contribué à réduire de manière significative le temps de calcul et à améliorer la réactivité du moteur.",
                            "CE": "CE2.01 | En formalisant et modélisant des situations complexes"
                        },
                        {
                            "title": "Comparaison d'approches différentes",
                            "content": "Un exemple concret d'optimisation a été la comparaison entre l'utilisation des structures `std::vector` et des tableaux statiques. Nous avons également comparé différentes méthodes d'évaluation de positions et de sélection des coups pour équilibrer la rapidité et la précision des décisions du moteur. Cette comparaison a permis d'identifier les solutions les plus adaptées à l'architecture du moteur, en fonction des contraintes de performance.",
                            "CE": "CE2.02 | En recensant les algorithmes et les structures de données usuels"
                        }
                    ],
                    "proof": [
                        "/Portfolio/image/Project/Perf_Analysis.PNG",
                        "/Portfolio/image/Project/Vector_vs_Array_Comparison.PNG"
                    ]
                },
                {
                    "id": 2,
                    "title": "AC 2 - Profiler, analyser et justifier le comportement d'un code existant",
                    "description": "Profilage et analyse des performances du moteur d'échecs pour identifier les optimisations possibles.",
                    "paragraphes": [
                        {
                            "title": "Outils de profilage utilisés",
                            "content": "J'ai utilisé l'outil Perf pour identifier les parties du code nécessitant des optimisations. Par exemple, l'analyse a révélé que la vérification des positions des pièces était un point critique. En optimisant cette fonction, nous avons doublé sa vitesse, ce qui a significativement réduit le temps total d'exécution du moteur. Les ajustements effectués ont permis d'atteindre une amélioration notable des performances sans sacrifier la précision.",
                            "CE": "CE2.03 | En s’appuyant sur des schémas de raisonnement"
                        },
                        {
                            "title": "Justification des choix d'optimisation",
                            "content": "Chaque optimisation a été discutée avec l'équipe avant d'être implémentée. Par exemple, l'intégration des tables de transposition a nécessité un investissement en temps considérable, mais elle a permis de réduire drastiquement les recalculs lors de l'exploration des coups, justifiant ainsi sa complexité d'implémentation par l'amélioration significative des performances. Ces choix ont été validés par des tests mesurant l'impact direct sur le temps de recherche du moteur.",
                            "CE": "CE2.04 | En justifiant les choix et validant les résultats"
                        }
                    ],
                    "proof": [
                        "/Portfolio/image/Project/Perf_Optimization.PNG",
                        "/Portfolio/image/Project/Transposition_Tables_Impact.PNG"
                    ]
                },
                {
                    "id": 3,
                    "title": "AC 3 - Choisir et utiliser des bibliothèques et méthodes dédiées au domaine d'application",
                    "description": "Sélection et intégration de méthodes spécialisées pour optimiser la recherche et l'évaluation des positions dans le moteur d'échecs.",
                    "paragraphes": [
                        {
                            "title": "Optimisation avec MVV-LVA",
                            "content": "L'implémentation de l'algorithme MVV-LVA (Most Valuable Victim - Least Valuable Attacker) a permis d'améliorer l'ordre des coups en priorisant les captures les plus prometteuses. Cette méthode a optimisé les performances en réduisant la profondeur de recherche nécessaire pour identifier les meilleurs coups. Bien que l'intégration initiale ait ralenti certaines évaluations, des ajustements ont permis de trouver un équilibre entre la précision et la vitesse d'exécution, tout en réduisant le nombre de nœuds à explorer.",
                            "CE": "CE2.02 | En recensant les algorithmes et les structures de données usuels"
                        },
                        {
                            "title": "Utilisation d'outils spécialisés",
                            "content": "J'ai utilisé des méthodes spécifiques à l'IA pour affiner les évaluations du moteur, notamment en intégrant l'algorithme MVV-LVA et les tables de transposition pour réduire les recalculs. Cela a amélioré la précision et la performance globale du moteur, en permettant d'optimiser le choix des coups tout en garantissant la vitesse d'exécution nécessaire à un moteur d'échecs performant.",
                            "CE": "CE2.01 | En formalisant et modélisant des situations complexes"
                        }
                    ],
                    "proof": [
                        "/Portfolio/image/Project/MVV_LVA_Integration.PNG",
                        "/Portfolio/image/Project/Pygame.PNG"
                    ]
                }
            ]
        }
    ];


    const activeACS = learningData.find((item) => item.theme === activeTab)?.ACS || [];

    return (
        <div className={style.container}>
            <h1>Apprentissages Critiques</h1>
            <div className={style.tabs}>
                {learningData.map(({ theme }) => (
                    <Tab key={theme} label={theme} active={theme === activeTab} onClick={() => setActiveTab(theme)} />
                ))}
            </div>
            <div className={style.content}>
                {activeACS.map((ac) => <LearningCard key={ac.id} {...ac} />)}
            </div>
        </div>
    );
};

export default ApprentissagesCritiquesPage;
