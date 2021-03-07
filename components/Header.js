// components/Header.js

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

import styles from "./Header.module.scss";

const Header = props => (
  <div className={styles.Header}>
    <div className={styles.Typewriter}>
      {props.appTitle}
    </div>
    <div className={styles.LinkIconBlock}>
      <span className={styles.LinkIcon}>
      <a href="https://github.com/L3uler"><FontAwesomeIcon icon={faGithubSquare} /></a>
      </span>
      <span className={styles.LinkIcon}>
      <a href="https://www.linkedin.com/in/liammcroe/"><FontAwesomeIcon icon={faLinkedin} /></a>
      </span>
    </div>

  </div>
);

export default Header;