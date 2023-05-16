import styles from "./ContactPage.module.css";
import { useEffect, ReactElement, FC } from "react";
import MyPicture from "../../components/Picture/Picture";
import Head from "next/head";
import Data from "../../Languages.json";
import { GitHubLogo, LinkedInLogo } from "@/components/Logos/Logos";
import { IdataAll } from "@/IData";
import ContactForm from "@/components/ContactForm/ContactForm";

const ContactPage: FC = (): ReactElement => {
  const data: IdataAll = Data;
  return (
    <main className={styles.ContactPageWrapper}>
      <Head>
        <meta charSet="utf-8" />
        <title>Contact Me - Marius Elting - Webdeveloper</title>
        <link
          rel="canonical"
          href="https://mariuselting.dev/contactme"
        />
        <meta
          name="description"
          content="I'm Marius Elting, this is my Portfolio. 
  Watch my TechStack, Projects and Contact me.
  I'm an aspiring Full Stack Web Developer using the MERN Stack. Contact me per Mail."
        />
      </Head>
      <ContactForm />
      <section className={styles.ContactPageRightContainer}>
        <article>
          <MyPicture />
        </article>
        <article>
          <a
            className={styles.ContactPageLogoWrapper}
            title="My LinkedIn"
            target="_blanck"
            href="https://www.linkedin.com/in/marius-elting-a60959203/">
            <LinkedInLogo />
          </a>
          <a
            className={styles.ContactPageLogoWrapper}
            title="My Github"
            target="_blanck"
            href="https://github.com/Marius-Elting">
            {" "}
            <GitHubLogo />
          </a>
        </article>
        <article>
          <a
            href="mailto:contact@mariuselting.dev"
            className="underlineHover">
            contact@mariuselting.dev
          </a>{" "}
          <button
            className={`underlineHover ${styles.ContactPageCopyButton}`}
            onClick={(e) => {
              navigator.clipboard.writeText("contact@mariuselting.dev");
              const target = e.target as Element;
              target.innerHTML = "copied!";
              setTimeout(() => {
                target.innerHTML = "copy";
              }, 2000);
            }}>
            copy
          </button>
        </article>
      </section>
    </main>
  );
};

export default ContactPage;
