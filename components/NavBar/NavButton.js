// components/NavBar/NavButton.js

import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./NavButton.module.scss";

const NavButton = props => {

    const router = useRouter();

    return (
        <Link href={props.path}>
            <div
                className={`${styles.NavButton} ${router.pathname === props.path ? props.active : ""
                    }`}
            >
                <div className="Icon">{props.icon}</div>
                <span className={styles.Label}>{props.label}</span>
            </div>
        </Link>
    );
};

export default NavButton;