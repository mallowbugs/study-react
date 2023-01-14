import Head from "next/head";
import { SWRConfig } from "swr";
import { API_URL } from "src/utils/const";
import { CommentList } from "src/components/Comment/CommentList";

export const getStaticProps = async () => {
  const COMMENTS_API_URL = `${API_URL}/comments`;
  const comments = await fetch(COMMENTS_API_URL);
  const commentsData = await comments.json();
  return {
    props: {
      fallback: {
        [COMMENTS_API_URL]: commentsData,
      },
    },
    revalidate: 10,
  };
};

const Comments = (props) => {
  const { fallback } = props;
  return (
    <div>
      <Head>
        <title>Comments page</title>
      </Head>
      <SWRConfig value={{ fallback }}>
        <CommentList />
      </SWRConfig>
    </div>
  );
};

export default Comments;
