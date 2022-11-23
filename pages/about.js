import styles from "../styles/Home.module.css";
import Head from "next/head";
import Links from "../components/Links";
import { Footer, footer } from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>about page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>ABOUT PAGE</h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/about.js</code>
        </p>
        <Links />
      </main>
      <Footer />
    </div>
  );
}
