// pages/index.js

import Layout from "../components/Layout";

import ProfileImage from "../components/PageSpecific/Index/ProfileImage";
import ProfileContent from "../components/PageSpecific/Index/ProfileContent"


const Index = () =>
    <Layout>
        <ProfileImage header={`Hello.`} subHeader={`I'm Liam McRoe, a software developer based in Edinburgh, Scotland.`} imageSource={`/images/me.jpg`} />
        <ProfileContent>
        </ProfileContent>
    </Layout>;
export default Index;