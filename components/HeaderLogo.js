// components/HeaderLogo.js

import styles from "./HeaderLogo.module.scss";

const HeaderLogo = props => (

    <div className={styles.HeaderLogo}>
        <div className={styles.Typewriter}>
            {props.appTitle}
        </div>
    </div>
);

export default HeaderLogo;