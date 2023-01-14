import "tailwindcss/tailwind.css";
import Head from "next/head";
import { SWRConfig } from "swr";
import { fetcher } from "src/utils/fetcher";
import { AppLayout } from "src/layouts/AppLayout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SWRConfig value={{ fetcher }}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </SWRConfig>
    </>
  );
};

export default MyApp;
