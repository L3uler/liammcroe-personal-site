// components/PageSpecific/Index/ProfileImage.js

import styles from "./ProfileImage.module.scss";

const ProfileImage = (props) => (
    <div className={styles.ProfileImage}>
        <img src={props.imageSource} />
    </div>
);

export default ProfileImage;