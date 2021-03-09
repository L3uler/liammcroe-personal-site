// components/PageSpecific/Project/ProjectCardGroup.js

import ProjectCard from "./ProjectCard";

import styles from "./ProjectCardGroup.module.scss";

const ProjectCardGroup = props => (
    <div className={styles.ProjectCardGroup}>
        {props.projectCards.map(card => (
            <ProjectCard
                key={card.title}
                title={card.title}
                content={card.content}
            />
        ))}
    </div>
);

export default ProjectCardGroup;