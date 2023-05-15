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
  TSStroke,
  HTMLStroke,
  CSSStroke,
  JavaScriptStroke,
  MongoDBIconStroke,
  ExpressIconStroke,
  ReactIconStroke,
  NodeJSIconStroke,
  ReduxStroke,
  FigmaStroke,
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
            src={HTMLStroke.src}
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
            src={CSSStroke.src}
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
            src={JavaScriptStroke.src}
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
            src={ReactIconStroke.src}
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
            src={NodeJSIconStroke.src}
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
            src={ExpressIconStroke.src}
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
            src={MongoDBIconStroke.src}
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
            src={ReduxStroke.src}
            alt="Redux Logo"></Image>
          <div className={styles.ImgDescription}>
            <h2>Redux</h2>
          </div>
        </div>
        {/* <div
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
        </div> */}
        <div
          className={styles.SingleImgWrapper}
          {...aosDataProject}
          data-aos-offset="156">
          <Image
            width={120}
            height={120}
            src={TSStroke.src}
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
            src={FigmaStroke.src}
            alt="Figma Logo"></Image>
          <div className={styles.ImgDescription}>
            <h2>Figma</h2>
          </div>
        </div>
        {/* <div
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
        </div> */}
        {/* <div
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
        </div> */}
        {/* <div
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
        </div> */}
      </article>
    </section>
  );
}

export default TechStack;
