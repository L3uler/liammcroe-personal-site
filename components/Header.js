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
      <Link href="/">
        {props.appTitle}
      </Link>
    </div>
    <div className={styles.Buttons}>
      <a href="https://github.com/L3uler"><FontAwesomeIcon icon={faGithubSquare}/></a>
      
      <a href="https://www.linkedin.com/in/liammcroe/"><FontAwesomeIcon icon={faLinkedin}/></a>
    </div>
    
  </div>
);

export default Header;