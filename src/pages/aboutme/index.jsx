import styles from "./AboutMe.module.css";
import AboutMeHeader from "../../components/AboutMe/AboutMeHeader/AboutMeHeader";

import Head from "next/head";

function AboutMe() {
    return (<main id="AboutMe-Wrapper">
        <Head>
            <meta charSet="utf-8" />
            <title>About Me - Marius Elting - Webdeveloper</title>
            <link rel="canonical" href="https://mariuselting.dev/aboutme" />
            <meta name="description" content="I'm Marius Elting, this is my Portfolio. 
  Watch my TechStack, Projects and Contact me.
  I'm an aspiring Full Stack Web Developer using the MERN Stack. Here you find out everything about me" />
        </Head>
        <AboutMeHeader />
        {/* <TimeLine /> */}
    </main>
    );
}

export default AboutMe;