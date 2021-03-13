// components/Header/SocialButton.js

import styles from "./SocialButton.module.scss";

const SocialButton = props => (
    <a href={props.path} target="_blank">
        <div className={styles.SocialButton}>
            <div className={styles.Icon}>{props.icon}</div>
        </div>
    </a>
);

export default SocialButton;