import styles from "./Header.module.css";
import Link from "next/link";
import Data from "../../Languages.json"
import { useEffect, useRef, useState } from "react";

function Header({ setLang, lang }) {
    const [Header, setHeader] = useState()
    const burgerRef = useRef()
    useEffect(() => {
        if (!sessionStorage.getItem("Language")) {
            setHeader(Data["English"].Header)
        } else {
            setHeader(Data[sessionStorage.getItem("Language")].Header)
        }
    }, [])

    if (!Header) {
        return
    }
    const navigated = () => {
        burgerRef.current.checked = false
    }


    return (
        <header id={styles.HeaderWrapper}>
            <input className={styles.HeaderAcceptInfo} type="checkbox"></input>
            <Link href="/">
                <h1>Marius Elting</h1>
            </Link>
            <input ref={burgerRef} className={styles.HeaderBurger} type="checkbox"></input>
            <nav id={styles.NavWrapper}>
                <ul>
                    <li><Link onClick={navigated} className="underlineHover" href="/">{Header.home}</Link></li>
                    <li><Link onClick={navigated} className="underlineHover" href="/allprojects">{Header.projects}</Link></li>
                    <li><Link onClick={navigated} className="underlineHover" href="/aboutme">{Header.aboutMe}</Link></li>
                    <li><Link onClick={navigated} className="underlineHover" href="/contactme">{Header.contact}</Link></li>
                    <li><span className={lang === "German" ? styles.active : ""} onClick={() => setLang("German")}>DE</span> | <span className={lang === "English" ? styles.active : ""} onClick={() => setLang("English")}>EN</span></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;