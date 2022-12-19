import styles from "src/styles/Home.module.css";
import Head from "next/head";
import { Main } from "src/components/Main";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";

const About = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>about page</title>
      </Head>
      <Header />
      {props.isShow ? <h1>{props.doubleNum}</h1> : null}
      <button onClick={props.handleClick}>カウントアップ</button>
      <button onClick={props.handleDisplay}>
        {props.isShow ? "非表示" : "表示"}
      </button>
      <input type="text" value={props.text} onChange={props.handleChange} />
      <button onClick={props.handleAdd}>追加</button>
      <ul>
        {props.array.map((item) => {
          return <li key={item}> {item}</li>;
        })}
      </ul>
      <Main page="about"></Main>
      <Footer />
    </div>
  );
};

export default About;