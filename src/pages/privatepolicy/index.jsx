import styles from "./Policy.module.css"
import Data from "../../Languages.json"
import { useEffect, useState } from "react"

function DataPolicy() {

    const [Privacy, setPrivacy] = useState()
    useEffect(() => {
        if (!sessionStorage.getItem("Language")) {
            setPrivacy(Data["English"].Privacy)
        } else {
            setPrivacy(Data[sessionStorage.getItem("Language")].Privacy)
        }
    }, [])

    if (!Privacy) {
        return
    }
    return (
        <main className={styles.PolicyWrapper}>
            <h1>{Privacy.Headline}</h1>
            <section>
                <p>{Privacy.Text}</p>
            </section>
        </main>
    );
}

export default DataPolicy