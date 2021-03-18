// config/projectCards.js

const projectCards = [
    {
        title: "BottleService",
        content: "This is a lightweight .NET 5 microservice I wrote for a Whisky and Wine cellar management app. The service follows the ports and adapter pattern, exposing an ASP.NET Core REST API and using MongoDB for storage. It also uses some popular .NET libraries to do validation, mapping, and a bunch of other stuff. It allows clients to perform CRUD operations on Bottle resources, the central domain entity for the application. The service has been containerised with Docker for ease of development and deployment. I've uploaded it to my GitHub as a bit of a sample, to showcase a backend service that I architected and built using a range of modern technologies. Feel free to dig into the code.",
        image: "/images/BottleService.jpg",
        cardLinks: [
            {
                link: "https://github.com/L3uler/bottle-service",
                mouseover: "View code on GitHub",
                label: "View code "
            }
        ],
        technologies: [
            "ASP.NET Core",
            "C#",
            "MongoDB",
            "Docker"
        ]
    },
    {
        title: "This Site",
        content: "I decided to put this site together to get some more experience of front-end development using modern frameworks. I built it from scratch using the Next.js framework and React. It's hosted via Vercel, which provides a CI/ CD pipeline that integrates directly with GitHub for a seemless, modern deployment strategy. Speaking of GitHub, the entire codebase can be found in a public repo on my page, so check it out!",
        image: "/images/PersonalSite.jpg",
        cardLinks: [
            {
                link: "https://github.com/L3uler/liammcroe-personal-site",
                mouseover: "View code on GitHub",
                label: "View code"
            }
        ],
        technologies: [
            "Next.js",
            "React",
            "CSS",
            "JavaScript"
        ]
    }
];

export default projectCards;