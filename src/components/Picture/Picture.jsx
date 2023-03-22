import { PlaceHolderPic } from "../../Imports";
import styles from "./Picture.module.css"
function MyPicture() {
    return (
        <div id={styles.MyPictureWrapper}>
            <img src={PlaceHolderPic.src} alt="This is Me"></img>
        </div>
    );
}

export default MyPicture;