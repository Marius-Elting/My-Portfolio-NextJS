import Link from "next/link";
import styles from "./CustomButton.module.css";

function CustomButton({ children, linkTo, size }) {
    if (window.innerWidth <= 700) {
        size = size * 1.5
    }
    return (<div className={styles.CustomButtonWrapper}>
        <Link href={linkTo} className={"underlineHover"} >
            <p style={{
                "fontSize": size || 20
            }}>{children}</p>
        </Link>
    </div>);
}

export default CustomButton;