import CustomButton from "../../CustomButton/CustomButton";
import styles from "./AboutMeHeader.module.css";
import MyPicture from "../../Picture/Picture";
// import CV from "../../../assets/Marius Elting Lebenslauf.pdf"
import Data from "../../../Languages.json"
import { useEffect, useState } from "react";

function AboutMeHeader() {
    const [AboutMe, setAboutMe] = useState()
    const [Other, setOther] = useState()
    useEffect(() => {
        if (!sessionStorage.getItem("Language")) {
            setAboutMe(Data["English"].AboutMe)
            setOther(Data["English"].Other)
        } else {
            setAboutMe(Data[sessionStorage.getItem("Language")].AboutMe)
            setOther(Data[sessionStorage.getItem("Language")].Other)
        }
    }, [])

    if (!AboutMe || Other) {
        return
    }
    return (
        <section id={styles.AboutMeHeaderWrapper}>
            <section id={styles.AboutMeHeaderLeftContainer}>
                <h1>{AboutMe.AllHeadline}</h1>
                <article id={styles.AboutMeHeaderInfoWrapperOne}>
                    <h2>{AboutMe.MyPastHeadline}</h2>
                    <p className={styles.AboutMeHeaderDetailText}>{AboutMe.MyPast}
                    </p>
                    <input type="checkbox" className={styles.seeMore}></input>
                </article>
                <article id={styles.AboutMeHeaderInfoWrapperTwo}>
                    <h2>{AboutMe.TheBootcampHeadline}</h2>
                    <p className={styles.AboutMeHeaderDetailText}> {AboutMe.TheBootcamp}</p>
                    <input type="checkbox" className={styles.seeMore}></input>
                </article>
            </section>
            <section id={styles.AboutMeHeaderRightContainer}>
                <MyPicture />
                <CustomButton size={25} linkTo="/contactme">{Other.contactButton}</CustomButton>
                <div className={styles.CustomButtonWrapper}>
                    {/* <a href={CV} className={`${styles.downloadButton} underlineHover`} download="">{Other.downloadCV}</a> */}
                </div>
            </section>
        </section>
    );
}

export default AboutMeHeader;