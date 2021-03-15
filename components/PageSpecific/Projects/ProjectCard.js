// components/PageSpecific/Projects/ProjectCard.js

import CardLink from "./CardLink";

import styles from "./ProjectCard.module.scss";

const ProjectCard = (props) => {
    return (
        <div className={styles.ProjectCard}>
            <img src={props.image} />
            <div className={styles.container}>
                
                <div className={styles.CardHeader}>
                    <div className={styles.CardTitle}>
                        <h3>{props.title}</h3>
                    </div>         
                </div>

                <div className={styles.CardContent}>
                    {props.content}
                </div>

                <div className={styles.CardLinks}>
                        {props.cardLinks.map((cardLink, index) => (
                            <CardLink
                                key={index}
                                link={cardLink.link}
                                title={cardLink.mouseover}
                                icon={cardLink.icon}
                                label={cardLink.label}
                            />
                        ))}
                </div>
                
            </div>
        </div>
    );
};

export default ProjectCard;