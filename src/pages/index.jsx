import styles from "src/styles/Home.module.css";
import Head from "next/head";
import { Main } from "src/components/Main";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>index page</title>
      </Head>
      <Header />
      <Main page="index"></Main>
      <Footer />
    </div>
  );
}
