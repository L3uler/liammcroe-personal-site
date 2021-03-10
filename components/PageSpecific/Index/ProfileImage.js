// components/PageSpecific/Index/ProfileImage.js

import styles from "./ProfileImage.module.scss";

const ProfileImage = (props) => (

    <div className={styles.ProfileImage}>
        <div className={styles.ProfileTitle}>
            <h1>{props.header}</h1>
            <h2>{props.subHeader}</h2>
        </div>
        <img src={props.imageSource} />
    </div>
);

export default ProfileImage;