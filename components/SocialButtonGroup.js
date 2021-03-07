// components/SocialButtonGroup.js

import SocialButton from "./SocialButton";

import styles from "./SocialButtonGroup.module.scss";

const SocialButtonGroup = props => (
    <div className={styles.SocialButtonGroup}>
        {props.socialButtons.map(button => (
            <SocialButton
                key={button.path}
                path={button.path}
                icon={button.icon}
            />
        ))}
    </div>
);

export default SocialButtonGroup;