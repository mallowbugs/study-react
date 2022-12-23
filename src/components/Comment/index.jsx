import { useComment } from "src/hooks/useComment";
import Head from "next/head";
import { PostByCommentId } from "src/components/Post/PostByCommentId";

export const Comment = () => {
  const { comment, error, isLoading } = useComment();

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
      <h1>{comment?.name}</h1>
      {comment?.body ? <div>{comment.body}</div> : null}
      <h2>元の記事</h2>
      <PostByCommentId id={comment?.postId}></PostByCommentId>
    </div>
  );
};
