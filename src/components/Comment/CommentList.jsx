import Link from "next/link";
import { useFetchArray } from "src/hooks/useFetchArray";
import { API_URL } from "src/utils/const";

export const CommentList = () => {
  const { data, error, isLoading, isEmpty } = useFetchArray(
    `${API_URL}/comments`
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
      {data.map((comment) => {
        return (
          <li key={comment.id} className="border-b pb-2 hover:text-blue-500">
            <Link href={`/comments/${comment.id}`} prefetch={false}>
              {comment.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
