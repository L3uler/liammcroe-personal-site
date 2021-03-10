// pages/index.js

import Layout from "../components/Layout";

import ProfileImage from "../components/PageSpecific/Index/ProfileImage";


const Index = () =>
    <Layout>
        <ProfileImage header={`Hello.`} subHeader={`I'm Liam McRoe, a software developer based in Edinburgh, Scotland.`} imageSource={`/images/poppy.jpg`}/>
    </Layout>;

export default Index;