import styles from "./ThisIsMe.module.css";
import { PlaceHolderPic, MongoDBIcon, ExpressIcon, ReactIcon, NodeJSIcon } from "../../../Imports";
import CustomButton from "../../CustomButton/CustomButton";
import ArrowDown from "../../ArrowDown/ArrowDown";
import MyPicture from "../../Picture/Picture";
import Data from "../../../Languages.json"
import { useEffect, useState } from "react";


function ThisIsMe() {
    const [Other, setOther] = useState()
    const [Home, setHome] = useState()
    useEffect(() => {
        if (!sessionStorage.getItem("Language")) {
            setHome(Data["English"].Home)
            setOther(Data["English"].Other)
        } else {
            setHome(Data[sessionStorage.getItem("Language")].Home)
            setOther(Data[sessionStorage.getItem("Language")].Other)
        }
    }, [])

    if (!Home || !Other) {
        return
    }

    return (
        <section id={styles.ThisIsMeWrapper}>
            <article id={styles.ThisIsMeLeftContainer}>
                <article id={styles.ThisIsMeHeadline}>
                    <h2>{Home.Headline}<span>{Home.Headlinesub1}</span><span>{Home.Headlinesub2}</span></h2>
                    <h3>{"<"}Full Stack Webdeveloper{"/>"}</h3>
                </article>
                <article id={styles.ThisIsMeTechStackImgWrapper}>
                    <a href="#TechStack"><img src={MongoDBIcon.src} alt="MongoDB Logo"></img>MongoDB</a>
                    <a href="#TechStack"><img src={ExpressIcon.src} alt="Express Logo"></img>ExpressJS</a>
                    <a href="#TechStack"><img src={ReactIcon.src} alt="React logo"></img>ReactJS</a>
                    <a href="#TechStack"><img src={NodeJSIcon.src} alt="NodeJS Logo"></img>NodeJS</a>
                </article>
                <CustomButton size={20} linkTo="/contactme">{Other.contactButton}</CustomButton>
                <div>
                    <a title="My LinkedIn" target="_blanck" href="https://www.linkedin.com/in/marius-elting-a60959203/"><i className={`uil uil-linkedin ${styles.icons}`}></i></a>
                    <a title="My Github" target="_blanck" href="https://github.com/Marius-Elting"><i className={`uil uil-github ${styles.icons}`}></i></a>
                </div>
            </article>
            <article id={styles.ThisIsMeRightContainer}>
                <MyPicture />
            </article>
            <ArrowDown />
        </section>
    );
}

export default ThisIsMe;
