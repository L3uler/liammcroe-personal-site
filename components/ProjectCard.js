
import styles from "./ProjectCard.module.scss";

const ProjectCard = (props) => {
    return (
        <div className={styles.ProjectCard}>
            <div className={styles.container}>
                <h4><b>{props.title}</b></h4>
                <div className={styles.CardContent}>
                    {props.content}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;