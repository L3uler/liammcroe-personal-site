// pages/project.js
import Layout from "../components/Layout";

import ProjectCardGroup from "../components/PageSpecific/Projects/ProjectCardGroup";

import projectCards from "../config/projectCards";

const ProjectsView = (props) => (
    <Layout>
        <ProjectCardGroup projectCards={projectCards} />

    </Layout>
);

export default ProjectsView;