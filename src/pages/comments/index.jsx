import Head from "next/head";
import { Header } from "src/components/Header";
import { Comments as CommentsCompornent } from "src/components/Comments";

const Comments = () => {
  return (
    <div>
      <Head>
        <title>Comments page</title>
      </Head>
      <Header />
      <CommentsCompornent />
    </div>
  );
};

export default Comments;
