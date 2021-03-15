// config/projectCards.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithubSquare
  } from "@fortawesome/free-brands-svg-icons";
import {
    faLink
} from "@fortawesome/free-solid-svg-icons";

const projectCards = [
    {
        title: "BottleService",
        content: "A lightweight .NET 5 microservice I wrote for an alcohol collection management app. The service follows the ports and adapter pattern, exposing an ASP.NET Core REST API and using MongoDB for storage. It allows clients to perform CRUD operations on Bottle resources, the central domain entity for the app. The service has been containerised with Docker.",
        image: "/images/BottleService.jpg",
        cardLinks: [
            {
                link: "https://github.com/L3uler/bottle-service",
                icon: <FontAwesomeIcon icon={faGithubSquare} />,
                mouseover: "View code on GitHub",
                label: "View code"
            }
        ]
    },
    {
        title: "This Site",
        content: "This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content.",
        image: "/images/PersonalSite.jpg",
        cardLinks: [
            {
                link: "https://github.com/L3uler/liammcroe-personal-site",
                icon: <FontAwesomeIcon icon={faGithubSquare} />,
                mouseover: "View code on GitHub",
                label: "View code"
            }
        ]
    },
    {
        title: "BottleService",
        content: "A lightweight .NET 5 microservice I wrote for an alcohol collection management app. The service follows the ports and adapter pattern, exposing an ASP.NET Core REST API and using MongoDB for storage. It allows clients to perform CRUD operations on Bottle resources, the central domain entity for the app. The service has been containerised with Docker.",
        image: "/images/BottleService.jpg",
        cardLinks: [
            {
                link: "https://github.com/L3uler/bottle-service",
                icon: <FontAwesomeIcon icon={faGithubSquare} /> 
            }
        ]
    },
    {
        title: "This Site",
        content: "This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content.",
        image: "/images/PersonalSite.jpg",
        cardLinks: [
            {
                link: "https://github.com/L3uler/liammcroe-personal-site",
                icon: <FontAwesomeIcon icon={faGithubSquare} /> 
            }
        ]
    }
];

export default projectCards;