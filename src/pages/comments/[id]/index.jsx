import { SWRConfig } from "swr";
import { API_URL } from "src/utils/const";
import { CommentDetail } from "src/components/Comment/CommentDetail";

export const getStaticPaths = async () => {
  const comments = await fetch(`${API_URL}/comments?_limit=10`);
  const commentsData = await comments.json();
  const paths = commentsData.map((comment) => ({
    params: {
      id: comment.id.toString(),
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx) => {
  const { id } = ctx.params;
  const COMMENT_API_URL = `${API_URL}/comments/${id}`;
  const comment = await fetch(COMMENT_API_URL);
  if (!comment.ok) {
    return { notFound: true, revalidate: 10 };
  }
  const commentData = await comment.json();

  return {
    props: {
      fallback: {
        [COMMENT_API_URL]: commentData,
      },
    },
    revalidate: 10,
  };
};

const CommentsId = (props) => {
  const { fallback } = props;

  return (
    <div>
      <SWRConfig value={{ fallback }}>
        <CommentDetail></CommentDetail>
      </SWRConfig>
    </div>
  );
};

export default CommentsId;
