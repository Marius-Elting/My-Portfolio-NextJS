import React, { FC, ReactElement, useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

type Language = "English" | "German";

const Footer: FC = (): ReactElement => {
  const [lang, setLang] = useState<Language>();
  useEffect(() => {
    const lang: Language =
      (sessionStorage.getItem("Language") as Language) ||
      ("English" as Language);
    setLang(lang);
  }, []);

  if (!lang) {
    return <></>;
  }
  return (
    <footer id={styles.FooterWrapper}>
      <Link
        href="/impressum"
        className="underlineHover underlineHoverBlack">
        Impressum
      </Link>
      <Link
        href="/privatepolicy"
        className="underlineHover underlineHoverBlack">
        {" "}
        {lang === "English" ? "Private Policy" : "Datenschutz"}
      </Link>
    </footer>
  );
};

export default Footer;
