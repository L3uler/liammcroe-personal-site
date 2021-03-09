// components/PageSpecific/Project/ProjectCard.js

import styles from "./ProjectCard.module.scss";

const ProjectCard = (props) => {
    return (
        <div className={styles.ProjectCard}>
            <div className={styles.container}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />
                <div className={styles.CardHeader}>
                    <div className={styles.CardTitle}>
                        <h4>{props.title}</h4>
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