import Image from "next/image";
import {
  MovieMania1,
  PokeDex,
  WeatherApp,
  aosDataProject,
  SilentMoon,
} from "../../Imports";
import styles from "./SingleProject.module.css";
import { FC, ReactElement } from "react";
import { ISingleProject } from "@/IData";

interface ISingleProjectProps {
  data: ISingleProject;
  index: number;
}

const SingleProject: FC<ISingleProjectProps> = ({
  data,
  index,
}): ReactElement => {
  let MovieManiaImage = MovieMania1;
  let PokeDexImage = PokeDex;
  let WeatherAppImage = WeatherApp;
  let SilentMoonImg = SilentMoon;
  // height={100} width={200}
  return (
    <div
      key={index}
      className={styles.SingleProjectProjectWrapper}
      {...aosDataProject}>
      <h3>{data.title}</h3>
      <img
        src={eval(data.image).src}
        alt={data.title}
      />
      <div className={styles.SingleProjectHoverDiv}>
        <h4>{data.headline}</h4>
        <p>{data.description}</p>
        <p>{data.stack}</p>
        <a
          className="underlineHover underlineHoverColor"
          target="_blank"
          rel="noreferrer"
          href={data.link}>
          Click me to get to the Project
        </a>
      </div>
    </div>
  );
};

export default SingleProject;
