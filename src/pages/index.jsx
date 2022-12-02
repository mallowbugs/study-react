import styles from "src/styles/Home.module.css";
import Head from "next/head";
import { Main } from "src/components/Main";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [num, setNum] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback(() => {
    if (num < 10) {
      setNum((num) => num + 1);
    }
  }, [num]);
  const handleDisplay = useCallback(() => setIsShow((isShow) => !isShow), []);
  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("５文字以内で入力してください");
      return;
    }
    setText(e.target.value);
  }, []);

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
      {isShow ? <h1>{num}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <input type="text" value={text} onChange={handleChange} />
      <Main page="index"></Main>
      <Footer />
    </div>
  );
}
