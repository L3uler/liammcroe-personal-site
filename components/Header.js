// components/Header.js

import styles from "./Header.module.scss";

const Header = props => (
  <div className={styles.Header}>
    <div className={styles.Typewriter}>
      {props.appTitle}
    </div>
  </div>
);

export default Header;