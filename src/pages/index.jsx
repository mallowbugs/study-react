import styles from "src/styles/Home.module.css";
import Head from "next/head";
import { Main } from "src/components/Main";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [num, setNum] = useState(1);
  const handleClick = useCallback(() => {
    if (num < 10) {
      setNum((num) => num + 1);
    }
  }, [num]);
  useEffect(() => {
    document.body.style.backgroundColor = "lightgreen";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [num]);

  return (
    <div className={styles.container}>
      <Head>
        <title>index page</title>
      </Head>
      <Header />
      <h1>{num}</h1>
      <button href="/about" onClick={handleClick}>
        ボタン
      </button>
      <Main page="index"></Main>
      <Footer />
    </div>
  );
}
