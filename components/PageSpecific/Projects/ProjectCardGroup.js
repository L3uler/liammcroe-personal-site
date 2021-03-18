// components/PageSpecific/Projects/ProjectCardGroup.js

import ProjectCard from "./ProjectCard";

import styles from "./ProjectCardGroup.module.scss";

const ProjectCardGroup = props => (
    <div className={styles.ProjectCardGroup}>
        {props.projectCards.map((card, index) => (
            <ProjectCard
                key={index}
                title={card.title}
                content={card.content}
                image={card.image}
                cardLinks={card.cardLinks}
                technologies={card.technologies}
            />
        ))}
    </div>
);

export default ProjectCardGroup;