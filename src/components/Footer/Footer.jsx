import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from "./Footer.module.css"

const Footer = () => {

    const [lang, setLang] = useState()
    useEffect(() => {
        setLang(sessionStorage.getItem("Language"))
    }, [])

    if (!lang) {
        return
    }
    return (
        <footer id={styles.FooterWrapper}>
            <Link href="/impressum" className="underlineHover underlineHoverBlack">Impressum</Link>
            <Link href="/privatepolicy" className="underlineHover underlineHoverBlack" > {lang === "English" ? "Private Policy" : "Datenschutz"
            }</Link>
        </footer>
    )
}

export default Footer
