import styles from "./Loading.module.css";

const Loading = ({ center, customStyle }) => {

    return <div style={customStyle}
        className={`${styles.loading} ${center ? styles.loading - center : ""}`}>

    </div>;
};


export default Loading;