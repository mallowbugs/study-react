import { useComment } from "src/hooks/useComment";
import Head from "next/head";

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
    </div>
  );
};
