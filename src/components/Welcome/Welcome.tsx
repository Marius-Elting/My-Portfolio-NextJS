import React, { FC, ReactElement } from "react";
import styles from "./Welcome.module.css";

const Welcome: FC = (): ReactElement => {
  return (
    <section className={styles.WelcomeWrapper}>
      <article>
        <h3>Hello There,</h3>
        <h2>Welcome To My</h2>
        <h1>Portfolio</h1>
      </article>
    </section>
  );
};

export default Welcome;
