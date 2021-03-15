// config/navbarButtons.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faInfoCircle,
    faCode
} from "@fortawesome/free-solid-svg-icons";

const navButtons = [
    {
        label: "Home",
        path: "/",
        icon: <FontAwesomeIcon icon={faHome} />
    },
    {
        label: "About",
        path: "/about",
        icon: <FontAwesomeIcon icon={faInfoCircle} />
    },
    {
        label: "Projects",
        path: "/projects",
        icon: <FontAwesomeIcon icon={faCode} />
    }
];

export default navButtons;