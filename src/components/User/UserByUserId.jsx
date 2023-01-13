import { API_URL } from "src/utils/const";
import useSWR from "swr";

export const UserByUserId = (props) => {
  const { data, error, isLoading } = useSWR(
    props.id ? `${API_URL}/users/${props.id}` : null
  );

  if (isLoading) {
    return <div>ローディング中です</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return <div>Created By {data?.name}</div>;
};
