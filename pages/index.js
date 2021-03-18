// pages/index.js

import Layout from "../components/Layout";

import ProfileImage from "../components/PageSpecific/Index/ProfileImage";
import ProfileContent from "../components/PageSpecific/Index/ProfileContent"


const Index = () =>
    <Layout>
        <ProfileImage header={`Hello.`} subHeader={`I'm Liam McRoe, a software developer based in Edinburgh, Scotland.`} imageSource={`/images/me.jpg`} />
        <ProfileContent>
            <p>Testing what a paragraph looks like. This is what a paragraph looks like. blah blah. works and things. Testing what a paragraph looks like. This is what a paragraph looks like. blah blah. works and things. Testing what a paragraph looks like. This is what a paragraph looks like. blah blah. works and things. Testing what a paragraph looks like. This is what a paragraph looks like. blah blah. works and things.</p>
        </ProfileContent>
    </Layout>;

export default Index;