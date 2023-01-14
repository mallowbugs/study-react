import Head from "next/head";
import { useRouter } from "node_modules/next/router";
import { PostTitleByCommentId } from "src/components/Post/PostTitleByCommentId";
import { useFetch } from "src/hooks/useFetch";
import { API_URL } from "src/utils/const";

export const CommentDetail = () => {
  const router = useRouter();
  const {
    data: comment,
    error,
    isLoading,
  } = useFetch(
    router.query.id ? `${API_URL}/comments/${router.query.id}` : null
  );

  if (isLoading) {
    return <div>ローディング中です</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{comment?.name}</title>
      </Head>
      <h1 className="text-3xl font-bold">{comment?.name}</h1>
      {comment?.body ? <div className="mt-2">{comment.body}</div> : null}
      <h2 className="text-xl font-bold mt-10">元の記事</h2>
      <PostTitleByCommentId id={comment?.postId}></PostTitleByCommentId>
    </div>
  );
};
