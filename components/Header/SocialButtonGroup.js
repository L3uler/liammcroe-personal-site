// components/Header/SocialButtonGroup.js

import SocialButton from "./SocialButton";

import styles from "./SocialButtonGroup.module.scss";

const SocialButtonGroup = props => (
    <div className={styles.SocialButtonGroup}>
        {props.socialButtons.map((button, index) => (
            <SocialButton
                key={index}
                path={button.path}
                icon={button.icon}
                mouseover={button.mouseover}
            />
        ))}
    </div>
);

export default SocialButtonGroup;