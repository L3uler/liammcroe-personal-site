// config/buttons.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faInfoCircle,
    faCode
} from "@fortawesome/free-solid-svg-icons";

const navButtons = [
    {
        label: "home",
        path: "/",
        icon: <FontAwesomeIcon icon={faHome} />
    },
    {
        label: "about",
        path: "/about",
        icon: <FontAwesomeIcon icon={faInfoCircle} />
    },
    {
        label: "projects",
        path: "/projects",
        icon: <FontAwesomeIcon icon={faCode} />
    }
];

export default navButtons;