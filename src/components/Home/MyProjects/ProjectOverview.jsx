import Link from "next/link";
import styles from "./ProjectOverview.module.css"
import "aos/dist/aos.css";
import SingleProject from "../../SingleProject/SingleProject";
import Data from "../../../Languages.json"
import { useEffect, useState } from "react";

function ProjectOverwiew() {
    const [Projects, setProjects] = useState()
    useEffect(() => {
        if (!sessionStorage.getItem("Language")) {
            setProjects(Data["English"].Projects)
        } else {
            setProjects(Data[sessionStorage.getItem("Language")].Projects)
        }
    }, [])

    if (!Projects) {
        return
    }

    return (
        <section id={styles.ProjectsOverviewWrapper}>
            <article>
                <h2>myProjects</h2>
            </article>
            <article className={styles.ProjectsOverviewProjectWrapper}>
                {Projects.ProjectData.slice(0, 4).map((project, index) => (
                    <SingleProject key={index} data={project} />
                ))}
            </article>
            <article className={styles.ProjectsOverviewFooter}>
                <Link className="underlineHover" href="/projects">{Projects.showmore}</Link>
            </article>
        </section>
    );
};

export default ProjectOverwiew;