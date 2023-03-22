import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import '@/styles/globals.css'
import { Fragment, useEffect, useState } from 'react'
import Aos from "aos";
import { useRouter } from 'next/navigation';

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [lang, setLang] = useState("English")

  const changeLangHandler = (param) => {
    setLang(param)
    sessionStorage.setItem("Language", param)
    router.refresh();
  }

  useEffect(() => {
    Aos.init({ duration: 1000 });
    window.addEventListener('scroll', scrollHandler, { passive: true });

    if (!sessionStorage.getItem("Language")) {
      changeLangHandler("English")
    }
  }, []);


  const scrollHandler = () => {
    const scrollpos = window.pageYOffset;
    const body = document.getElementsByTagName("body")[0];
    const scrollButton = document.querySelector(".scrolldown");
    body.style.transition = " all .6s linear";
    if (scrollButton) {
      if (scrollpos >= 50) scrollButton.style.opacity = "0";
      else {
        scrollButton.style.opacity = "1";
      }
    }
  };
  return <Fragment>
    <Header lang={lang} setLang={changeLangHandler} />
    <Component {...pageProps} />
    <Footer />
  </Fragment>
}
