// pages/index.js

import Layout from "../components/Layout";

import ProfileImage from "../components/PageSpecific/Index/ProfileImage";


const Index = () =>
    <Layout>
        <h1>Liam McRoe</h1>

        <ProfileImage imageSource={`/images/poppy.jpg`}/>
        <h2>Software developer based in Edinburgh, Scotland.</h2>

    </Layout>;

export default Index;