// config/socialButtons.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithubSquare,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";

const socialButtons = [
    {
        label: "github",
        path: "https://github.com/L3uler",
        icon: <FontAwesomeIcon icon={faGithubSquare} />,
        mouseover: "Find me on GitHub"
    },
    {
        label: "linkedin",
        path: "https://www.linkedin.com/in/liammcroe/",
        icon: <FontAwesomeIcon icon={faLinkedin} />,
        mouseover: "Find me on LinkedIn"
    }
];

export default socialButtons;