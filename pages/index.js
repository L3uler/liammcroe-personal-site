// pages/index.js

import Layout from "../components/Layout";

import ProfileImage from "../components/PageSpecific/Index/ProfileImage";
import ProfileContent from "../components/PageSpecific/Index/ProfileContent"


const Index = () =>
    <Layout>
        <ProfileImage header={`Hello.`} subHeader={`I'm Liam McRoe, a software developer based in Edinburgh, Scotland.`} imageSource={`/images/me.jpg`} />
        <ProfileContent>
            <p>I work at Computershare, in our Edinburgh Global Development centre of excellence. I work mainly in C# on enterprise .NET systems but I am always open to new technical challenges.</p>
            <p>After studying an undergrad and master's in maths at Edinburgh university, I joined Computershare as part of our first ever Technology Graduate Scheme. Since then, I have gained experience in business analysis, software testing, and most importantly software development across a wide range of applications and services managed by Global Development on behalf of our business lines.</p>
            <p>Recently I have moved into the Build squad, with a focus on moving applications towards DevOps and CI/CD, as well as uplift and modernisation of applications via improving code quality and rearchitecting codebases.</p>
            <p>I care about software craftsmanship, and even though I am at a reasonably early stage in my career I spend lots of time thinking and learning about how I can write clean, maintainable code. You can find some of my side projects in the 'Projects' tab, or use the buttons in the top right to check me out on GitHub or LinkedIn.</p>
        </ProfileContent>
    </Layout>;
export default Index;