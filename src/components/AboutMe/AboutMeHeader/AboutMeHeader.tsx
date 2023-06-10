import CustomButton from "../../CustomButton/CustomButton";
import styles from "./AboutMeHeader.module.css";
import MyPicture from "../../Picture/Picture";
// import CV from "../../../assets/Marius_Elting_Lebenslauf.pdf"
import Data from "../../../Languages.json";
import { FC, ReactElement, useEffect, useState } from "react";
import { IAboutMe, IOther, IdataAll } from "@/IData";

type Language = "English" | "German";

const AboutMeHeader: FC = (): ReactElement => {
  const [AboutMe, setAboutMe] = useState<IAboutMe>();
  const [Other, setOther] = useState<IOther>();
  const data: IdataAll = Data;
  useEffect(() => {
    const lang: Language = sessionStorage.getItem("Language") as Language;
    setAboutMe(data[lang].AboutMe);
    setOther(data[lang].Other);
  }, [data]);

  if (!AboutMe || !Other) {
    return <></>;
  }
  return (
    <section id={styles.AboutMeHeaderWrapper}>
      <section id={styles.AboutMeHeaderLeftContainer}>
        <h1>{AboutMe.AllHeadline}</h1>
        <article id={styles.AboutMeHeaderInfoWrapperOne}>
          <h2>{AboutMe.MyPastHeadline}</h2>
          <p className={styles.AboutMeHeaderDetailText}>{AboutMe.MyPast}</p>
          <input
            type="checkbox"
            className={styles.seeMore}></input>
        </article>
        <article id={styles.AboutMeHeaderInfoWrapperTwo}>
          <h2>{AboutMe.TheBootcampHeadline}</h2>
          <p className={styles.AboutMeHeaderDetailText}>
            {" "}
            {AboutMe.TheBootcamp}
          </p>
          <input
            type="checkbox"
            className={styles.seeMore}></input>
        </article>
      </section>
      <section id={styles.AboutMeHeaderRightContainer}>
        <MyPicture />
        <CustomButton
          size={22}
          linkTo="/contactme">
          {Other.contactButton}
        </CustomButton>
        <div className={styles.CustomButtonWrapper}>
          {/* <div className="CustomButtonWrapper">
                        <a href={CV} className="underlineHover downloadButton" download="">{Other.downloadCV}</a>
                    </div> */}
        </div>
      </section>
    </section>
  );
};

export default AboutMeHeader;
