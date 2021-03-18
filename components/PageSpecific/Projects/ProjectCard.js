// components/PageSpecific/Projects/ProjectCard.js

import TechnologyTag from "./TechnologyTag";

import styles from "./ProjectCard.module.scss";

const ProjectCard = (props) => {
    return (
        <div className={styles.ProjectCard}>

            <img src={props.image} />

            <div className={styles.container}>

                <div className={styles.CardHeader}>
                    <h3>{props.title}</h3>
                </div>

                <div className={styles.CardContent}>
                    {props.content}
                </div>

                <div className={styles.CardLinks}>
                    {props.cardLinks.map((cardLink, index) => (
                        <div key={index} className={styles.LinkButton} title={cardLink.mouseover}>
                            <a href={cardLink.link} target="_blank">
                                {cardLink.label}
                            </a>
                        </div>
                    ))}
                </div>

                <div className={styles.TechTags}>
                    {props.technologies.map((technology, index) => (
                        <TechnologyTag key={index}>{technology}</TechnologyTag>
                    ))}
                </div>

            </div>

        </div>
    );
};

export default ProjectCard;