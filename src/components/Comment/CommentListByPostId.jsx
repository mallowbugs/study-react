import Link from "next/link";
import { useFetchArray } from "src/hooks/useFetchArray";
import { API_URL } from "src/utils/const";

export const CommentListByPostId = (props) => {
  const { data, error, isLoading, isEmpty } = useFetchArray(
    props.id ? `${API_URL}/posts/${props.id}/comments` : null
  );

  if (isLoading) {
    return <div>ローディング中です</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  if (isEmpty) {
    return <div>データは空です</div>;
  }

  return (
    <ul className="space-y-2">
      {data?.map((comment) => {
        return (
          <li key={comment.id} className="border-b pb-2 hover:text-blue-500">
            <Link href={`/comments/${comment.id}`}>{comment.body}</Link>
          </li>
        );
      })}
    </ul>
  );
};
