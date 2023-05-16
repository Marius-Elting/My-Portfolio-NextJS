import { FC, ReactElement } from "react";
import { PlaceHolderPic } from "../../Imports";
import styles from "./Picture.module.css";

const MyPicture: FC = (): ReactElement => {
  return (
    <div id={styles.MyPictureWrapper}>
      <img
        src={PlaceHolderPic.src}
        alt="This is Me"></img>
    </div>
  );
};

export default MyPicture;
