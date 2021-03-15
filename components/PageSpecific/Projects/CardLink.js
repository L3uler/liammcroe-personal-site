// components/PageSpecific/Projects/CardLink.js

import styles from "./CardLink.module.scss";

const CardLink = (props) => (

        <div className={styles.CardLink}>
            <a href={props.link} title={props.title} target="_blank">
                <div className={styles.Icon}>{props.icon}</div>
                <span className={styles.Label}>{props.label}</span>
            </a>
        </div>
);

export default CardLink;