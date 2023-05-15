import Image from "next/image";
import {
  HTML,
  CSS,
  JavaScript,
  MongoDBIcon,
  ExpressIcon,
  ReactIcon,
  NodeJSIcon,
  aosDataProject,
  Redux,
  Firebase,
  Git,
  Figma,
  Sass,
  Bootstrap,
  TS,
} from "../../../Imports";

import styles from "./TechStack.module.css";
import "aos/dist/aos.css";

function TechStack() {
  return (
    <section
      id="TechStack"
      className={`${styles.TechStack}`}>
      <h2>My Skills</h2>

      <article className={`${styles.AllImgWrapper} ${styles.imgWrapper}`}>
        <div
          className={styles.SingleImgWrapper}
          {...aosDataProject}
          data-aos-offset="150">
          <Image
            width={120}
            height={120}
            src={HTML.src}
            alt="HTML Logo"></Image>
          <div className={styles.ImgDescription}>
            <h2>HTML</h2>
          </div>
        </div>
        <div
          className={styles.SingleImgWrapper}
          {...aosDataProject}
          data-aos-offset="151">
          <Image
            width={120}
            height={120}
            src={CSS.src}
            alt="CSS Logo"></Image>
          <div className={styles.ImgDescription}>
            <h2>CSS</h2>
          </div>
        </div>
        <div
          className={styles.SingleImgWrapper}
          {...aosDataProject}
          data-aos-offset="152">
          <Image
            width={120}
            height={120}
            src={JavaScript.src}
            alt="Javascript Logo"></Image>
          <div className={styles.ImgDescription}>
            <h2>JavaScript</h2>
          </div>
        </div>
        <div
          className={styles.SingleImgWrapper}
          {...aosDataProject}
          data-aos-offset="153">
          <Image
            width={120}
            height={120}
            src={ReactIcon.src}
            alt="React Logo"></Image>
          <div className={styles.ImgDescription}>
            <h2>React</h2>
          </div>
        </div>
        <div
          className={styles.SingleImgWrapper}
          {...aosDataProject}
          data-aos-offset="154">
          <Image
            width={120}
            height={120}
            src={NodeJSIcon.src}
            alt="NodeJS Logo"></Image>
          <div className={styles.ImgDescription}>
            <h2>NodeJS</h2>
          </div>
        </div>
        <div
          className={styles.SingleImgWrapper}
          {...aosDataProject}
          data-aos-offset="155">
          <Image
            width={120}
            height={120}
            src={ExpressIcon.src}
            alt="ExpressJS Logo"></Image>
          <div className={styles.ImgDescription}>
            <h2>ExpressJS</h2>
          </div>
        </div>
        <div
          className={styles.SingleImgWrapper}
          {...aosDataProject}
          data-aos-offset="156">
          <Image
            width={120}
            height={120}
            src={MongoDBIcon.src}
            alt="MongoDB Logo"></Image>
          <div className={styles.ImgDescription}>
            <h2>MongoDB</h2>
          </div>
        </div>
        {/* </article>
            <article className="imgWrapper" > */}
        <div
          className={styles.SingleImgWrapper}
          {...aosDataProject}
          data-aos-offset="150">
          <Image
            width={120}
            height={120}
            src={Redux.src}
            alt="Redux Logo"></Image>
          <div className={styles.ImgDescription}>
            <h2>Redux</h2>
          </div>
        </div>
        <div
          className={styles.SingleImgWrapper}
          {...aosDataProject}
          data-aos-offset="151">
          <Image
            width={120}
            height={120}
            src={Firebase.src}
            alt="Firebase Logo"></Image>
          <div className={styles.ImgDescription}>
            <h2>Firebase</h2>
          </div>
        </div>
        <div
          className={styles.SingleImgWrapper}
          {...aosDataProject}
          data-aos-offset="156">
          <Image
            width={120}
            height={120}
            src={TS.src}
            alt="TypeScript Logo"></Image>
          <div className={styles.ImgDescription}>
            <h2>TypeScript</h2>
          </div>
        </div>
        <div
          className={styles.SingleImgWrapper}
          {...aosDataProject}
          data-aos-offset="152">
          <Image
            width={120}
            height={120}
            src={Figma.src}
            alt="Figma Logo"></Image>
          <div className={styles.ImgDescription}>
            <h2>Figma</h2>
          </div>
        </div>
        <div
          className={styles.SingleImgWrapper}
          {...aosDataProject}
          data-aos-offset="153">
          <Image
            width={120}
            height={120}
            src={Sass.src}
            alt="Sass Logo"></Image>
          <div className={styles.ImgDescription}>
            <h2>Sass</h2>
          </div>
        </div>
        <div
          className={styles.SingleImgWrapper}
          {...aosDataProject}
          data-aos-offset="155">
          <Image
            width={120}
            height={120}
            src={Git.src}
            alt="Git Logo"></Image>
          <div className={styles.ImgDescription}>
            <h2>Git</h2>
          </div>
        </div>
        <div
          className={styles.SingleImgWrapper}
          {...aosDataProject}
          data-aos-offset="154">
          <Image
            width={120}
            height={120}
            src={Bootstrap.src}
            alt="Bootstrap Logo"></Image>
          <div className={styles.ImgDescription}>
            <h2>Bootstrap</h2>
          </div>
        </div>
      </article>
    </section>
  );
}

export default TechStack;
