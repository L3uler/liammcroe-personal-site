// components/Header/SocialButton.js

import styles from "./SocialButton.module.scss";

const SocialButton = props => (
    <a href={props.path} title={props.mouseover} target="_blank">
        <div className={styles.SocialButton}>
            <div className={styles.Icon}>{props.icon}</div>
        </div>
    </a>
);

export default SocialButton;