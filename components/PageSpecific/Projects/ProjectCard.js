// components/PageSpecific/Projects/ProjectCard.js

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
                    <div className={styles.CardLinks}>
                        <a href={`https://google.com`}>Google</a>
                    </div>
                </div>
                <div className={styles.CardContent}>
                    {props.content}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;