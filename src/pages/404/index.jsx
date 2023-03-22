import Link from "next/link";
import Head from "next/head";
import styles from "./404Page.module.css"


function Error404Page() {
    return (<main id={styles.ErrorPageMainWrapper}>
        <Head>
            <meta charSet="utf-8" />
            <title>404 Page not found - Marius Elting - Webdeveloper</title>
            <link rel="canonical" href="https://mariuselting.dev/404Error" />
            <meta name="description" content="This Page does not exists - 404 Error" />
        </Head>
        <h1>404</h1>
        <p>This Page does not exists</p>
        <Link className="underlineHover" href="/">Go Back to Home</Link>
    </main>);
}

export default Error404Page;