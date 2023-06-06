import { FC, ReactElement } from "react";
import { PlaceHolderPic } from "../../Imports";
import { Portrait } from "../../Imports";
import styles from "./Picture.module.css";
import Image from "next/image";

const MyPicture: FC = (): ReactElement => {
  return (
    <div id={styles.MyPictureWrapper}>
      {/* <img
        src={Portrait.src}
        alt="This is Me"></img> */}
      <Image
        src={Portrait}
        alt=""
        title=""
        placeholder="blur"
        layout="responsive"
        loading="lazy"
        objectFit="fill"
      />
    </div>
  );
};

export default MyPicture;
