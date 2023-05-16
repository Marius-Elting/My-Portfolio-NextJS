import styles from "./Header.module.css";
import Link from "next/link";
import Data from "../../Languages.json";
import { IHeaderData, IdataAll, IdataSingle } from "@/IData";
import {
  Dispatch,
  FC,
  ReactElement,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/router";

interface IHeaderProps {
  setLang: Dispatch<SetStateAction<string>>;
  lang: string;
}
type Language = "English" | "German";
const Header: FC<IHeaderProps> = ({ setLang, lang }): ReactElement => {
  const [Header, setHeader] = useState<IHeaderData>();
  const data: IdataAll = Data;
  const burgerRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const lang: Language = sessionStorage.getItem("Language") as Language;
    setHeader(data[lang].Header);
  }, []);

  const router = useRouter();
  const path = router.pathname;
  if (!Header) {
    return <></>;
  }
  const navigated = () => {
    if (!burgerRef.current?.checked) return;

    burgerRef.current.checked = false;
  };

  return (
    <header id={styles.HeaderWrapper}>
      <input
        className={styles.HeaderAcceptInfo}
        type="checkbox"></input>
      <Link href="/">
        <h1>Marius Elting</h1>
      </Link>
      <input
        ref={burgerRef}
        className={styles.HeaderBurger}
        type="checkbox"></input>
      <nav id={styles.NavWrapper}>
        <ul>
          <li>
            <Link
              onClick={navigated}
              className={`${path === "/" ? styles.active : ""} underlineHover`}
              href="/">
              {Header.home}
            </Link>
          </li>
          <li>
            <Link
              onClick={navigated}
              className={`${
                path === "/allprojects" ? styles.active : ""
              } underlineHover`}
              href="/allprojects">
              {Header.projects}
            </Link>
          </li>
          <li>
            <Link
              onClick={navigated}
              className={`${
                path === "/aboutme" ? styles.active : ""
              } underlineHover`}
              href="/aboutme">
              {Header.aboutMe}
            </Link>
          </li>
          <li>
            <Link
              onClick={navigated}
              className={`${
                path === "/contactme" ? styles.active : ""
              } underlineHover`}
              href="/contactme">
              {Header.contact}
            </Link>
          </li>
          <li>
            <span
              className={lang === "German" ? styles.active : ""}
              onClick={() => setLang("German")}>
              DE
            </span>{" "}
            |{" "}
            <span
              className={lang === "English" ? styles.active : ""}
              onClick={() => setLang("English")}>
              EN
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
