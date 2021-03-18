// components/PageSpecific/Index/ProfileContent.js

import styles from "./ProfileContent.module.scss";

const ProfileContent = (props) => (

        <div className={styles.ProfileContent}>
            {props.children}
        </div>
);

export default ProfileContent;