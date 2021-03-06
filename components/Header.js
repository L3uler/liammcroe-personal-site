// components/Header.js

import styles from "./Header.module.scss";

const Header = props => (
  <div className={styles.Header}>
    {props.appTitle}
  </div>
);

export default Header;