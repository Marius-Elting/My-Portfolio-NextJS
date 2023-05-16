import styles from "./Policy.module.css";
import Data from "../../Languages.json";
import { FC, ReactElement, useEffect, useState } from "react";
import { IPrivacy } from "@/IData";

type Language = "English" | "German";

const DataPolicy: FC = (): ReactElement => {
  const [Privacy, setPrivacy] = useState<IPrivacy>();
  useEffect(() => {
    const lang: Language = sessionStorage.getItem("Language") as Language;
    setPrivacy(Data[lang].Privacy);
  }, []);

  if (!Privacy) {
    return <></>;
  }
  return (
    <main className={styles.PolicyWrapper}>
      <h1>{Privacy.Headline}</h1>
      <section>
        <p>{Privacy.Text}</p>
      </section>
    </main>
  );
};

export default DataPolicy;
