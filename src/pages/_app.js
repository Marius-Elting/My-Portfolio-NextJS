import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import '@/styles/globals.css'
import { Fragment, useCallback, useEffect, useState } from 'react'
import Aos from "aos";
import { useRouter } from 'next/navigation';

export default function App({ Component, pageProps }) {
  const router = useRouter()

  const [lang, setLang] = useState("English")

  const changeLangHandler = useCallback((param) => {
    console.log(param)
    setLang(param)
    sessionStorage.setItem("Language", param)
    router.refresh();
  }, [router])

  useEffect(() => {
    Aos.init({ duration: 1000 });
    setLang(sessionStorage.getItem("Language"))
    if (!sessionStorage.getItem("Language")) {
      changeLangHandler("English")
    }
  }, [changeLangHandler]);

  return <Fragment>
    <Header lang={lang} setLang={changeLangHandler} />
    <Component {...pageProps} />
    <Footer />
  </Fragment>
}
