import React, { FC, ReactElement } from "react";
import ProjectOverwiew from "../components/Home/MyProjects/ProjectOverview";
import TechStack from "../components/Home/TechStack/TechStack";
import ThisIsMe from "../components/Home/ThisIsMe/ThisIsMe";
import Head from "next/head";
import Welcome from "@/components/Welcome/Welcome";

const Home: FC = (): ReactElement => {
  return (
    <main id="HomeWrapper">
      <Head>
        <meta charSet="utf-8" />
        <title>Marius Elting - Webdeveloper - Home</title>
        <link
          rel="canonical"
          href="https://mariuselting.dev"
        />
        <meta
          name="description"
          content="I'm Marius Elting, this is my Portfolio. 
  Watch my TechStack, Projects and Contact me.
  I'm an aspiring Full Stack Web Developer using the MERN Stack. This is my Homepage"
        />
      </Head>
      <Welcome />

      <TechStack />
      {/* @ts-ignore TODO */}
      <ProjectOverwiew />
    </main>
  );
};

export default Home;
