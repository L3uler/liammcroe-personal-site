// components/NavButton.js

import Link from "next/link";

import styles from "./NavButton.module.scss";

const NavButton = props => (
  <Link href={props.path}>
    <div className={styles.NavButton}>
    <div className="Icon">{props.icon}</div>
      <span className={styles.Label}>{props.label}</span>
    </div>
  </Link>
);

export default NavButton;