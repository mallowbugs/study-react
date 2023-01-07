import "tailwindcss/tailwind.css";
import Head from "next/head";
import { Layout } from "src/components/Layout";
import { SWRConfig } from "swr";
import { fetcher } from "src/utils/fetcher";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SWRConfig value={{ fetcher }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </>
  );
};

export default MyApp;
