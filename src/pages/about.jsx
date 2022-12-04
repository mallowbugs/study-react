import styles from "src/styles/Home.module.css";
import Head from "next/head";
import { Main } from "src/components/Main";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";
import { useBGLightGreen } from "src/hooks/useBGLightGreen";

export default function About() {
  const { num, isShow, handleClick, handleDisplay } = useCounter();
  const { text, array, handleAdd, handleChange } = useInputArray();
  useBGLightGreen();

  return (
    <div className={styles.container}>
      <Head>
        <title>about page</title>
      </Head>
      <Header />
      {isShow ? <h1>{num}</h1> : null}
      <button onClick={handleClick}>カウントアップ</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return <li key={item}> {item}</li>;
        })}
      </ul>
      <Main page="about"></Main>
      <Footer />
    </div>
  );
}
