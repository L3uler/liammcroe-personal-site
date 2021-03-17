// components/PageSpecific/Projects/ProjectCard.js
import { Button } from "reactstrap";

import CardLink from "./CardLink";

import styles from "./ProjectCard.module.scss";

const ProjectCard = (props) => {
    return (
        <div className={styles.ProjectCard}>

            <img src={props.image} />

            <div className={styles.container}>

                <div className={styles.CardLinks}>
                    {props.cardLinks.map((cardLink, index) => (

                        <a key={index} href={cardLink.link} title={cardLink.mouseover} target="_blank">
                            <Button className={styles.LinkButton}>{cardLink.label}</Button>
                        </a>
                    ))}
                </div>
                <div className={styles.CardHeader}>
                    <div className={styles.CardTitle}>
                        <h3>{props.title}</h3>
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