// components/Header/Header.js

import HeaderLogo from "./HeaderLogo";
import SocialButtonGroup from "./SocialButtonGroup";

import styles from "./Header.module.scss";

const Header = props => (
  <div className={styles.Header}>

    <HeaderLogo appTitle={props.appTitle} />
    <SocialButtonGroup socialButtons={props.socialButtons} />

  </div>
);

export default Header;