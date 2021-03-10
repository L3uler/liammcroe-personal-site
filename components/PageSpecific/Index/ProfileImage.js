// components/PageSpecific/Index/ProfileImage.js

import styles from "./ProfileImage.module.scss";

const ProfileImage = (props) => (

    <div className={styles.ProfileImage}>
        <div className={styles.ProfileTitle}>
            <h1>Hello,</h1>
            <h2>I'm Liam McRoe, a software developer based in Edinburgh, Scotland.</h2>
        </div>
        <img src={props.imageSource} />
    </div>
);

export default ProfileImage;