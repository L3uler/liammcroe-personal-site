// pages/nearme.js

import ProjectCardGroup from "../components/ProjectCardGroup";
import Layout from "../components/Layout";

import projectCards from "../config/projectCards";

const ProjectsView = (props) => (
    <Layout>
        <ProjectCardGroup projectCards={projectCards} />

    </Layout>
);

export default ProjectsView;