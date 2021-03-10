// pages/index.js

import Layout from "../components/Layout";

import ProfileImage from "../components/PageSpecific/Index/ProfileImage";


const Index = () =>
    <Layout>
        <ProfileImage imageSource={`/images/poppy.jpg`}/>
    </Layout>;

export default Index;