import SingleProject from "../../components/SingleProject/SingleProject";
import styles from "./AllProjects.module.css";
import { aosDataProject } from "../../Imports";
import Head from "next/head";
import Data from "../../Languages.json";
import { FC, ReactElement, useEffect, useState } from "react";
import { IProjects, IdataAll } from "@/IData";

type Language = "English" | "German";

const AllProjects: FC = (): ReactElement => {
  const [Projects, setProjects] = useState<IProjects>();
  const data: IdataAll = Data;

  useEffect(() => {
    const lang: Language = sessionStorage.getItem("Language") as Language;
    setProjects(data[lang].Projects);
  }, []);

  if (!Projects) {
    return <></>;
  }

  return (
    <main id={styles.AllProjectsWrapper}>
      <Head>
        <meta charSet="utf-8" />
        <title>My Projects - Marius Elting - Webdeveloper</title>
        <link
          rel="canonical"
          href="https://mariuselting.dev/projects"
        />
        <meta
          name="description"
          content="I'm Marius Elting, this is my Portfolio. 
  Watch my TechStack, Projects and Contact me.
  I'm an aspiring Full Stack Web Developer using the MERN Stack. Here you con find my Projects"
        />
      </Head>
      <h1 {...aosDataProject}>{Projects.headline}</h1>
      <article>
        {Projects.ProjectData.slice(0, 4).map((project, index) => (
          <SingleProject
            key={index}
            index={index}
            data={project}
          />
        ))}
      </article>
    </main>
  );
};

export default AllProjects;
