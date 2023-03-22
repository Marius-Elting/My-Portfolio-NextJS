import styles from "./ArrowDown.module.css";

function ArrowDown() {
    return (
        <a href="#TechStack" className={`${styles.scrolldown} scrolldown`} style={{ color: 'skyblue' }}>
            <div className={styles.chevrons}>
                <div className={styles.chevrondown} />
                <div className={styles.chevrondown} />
            </div>
        </a>
    );
}

export default ArrowDown;