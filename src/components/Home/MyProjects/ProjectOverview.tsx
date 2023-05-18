import Link from "next/link";
import styles from "./ProjectOverview.module.css";
import "aos/dist/aos.css";
import SingleProject from "../../SingleProject/SingleProject";
import Data from "../../../Languages.json";
import { FC, ReactElement, useEffect, useState } from "react";
import { IProjects, IdataAll } from "@/IData";

type Language = "English" | "German";

const ProjectOverwiew: FC = (): ReactElement => {
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
    <section id={styles.ProjectsOverviewWrapper}>
      <h2>my Projects</h2>
      <article className={styles.ProjectsOverviewProjectWrapper}>
        {Projects.ProjectData.slice(0, 3).map((project, index) => (
          <SingleProject
            key={index}
            index={index}
            data={project}
          />
        ))}
      </article>
      <article className={styles.ProjectsOverviewFooter}>
        <Link
          className="underlineHover"
          href="/allprojects">
          {Projects.showmore}
        </Link>
      </article>
    </section>
  );
};

export default ProjectOverwiew;
