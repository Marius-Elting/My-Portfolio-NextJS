import styles from "./Impressum.module.css"

function Impressum() {

    return (
        <main className={styles.ImpressumWrapper}>
            <h1>Impressum</h1>
            <p>Marius Elting</p>
            <p>Don-Bosco-Straße 53</p>
            <p>46397 Bocholt</p>
            <a href="mailto:contact@mariuselting.dev">contact@mariuselting.dev</a>
            <a href="tel:+4915736533825">+49 15736533825</a>
        </main>
    );
}

export default Impressum