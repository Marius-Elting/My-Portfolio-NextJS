import { FC, ReactElement } from "react";
import styles from "./Loading.module.css";

interface ILoadingProps {
  center: boolean;
  customStyle?: Object;
}

const Loading: FC<ILoadingProps> = ({ center, customStyle }): ReactElement => {
  return (
    <div
      style={customStyle}
      className={`${styles.loading} ${
        center ? styles.loadingCenter : ""
      }`}></div>
  );
};

export default Loading;
