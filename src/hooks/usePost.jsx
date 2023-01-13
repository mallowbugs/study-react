import { API_URL } from "src/utils/const";
import useSWR from "swr";

export const usePost = (id) => {
  const { data, error, isLoading } = useSWR(
    id ? `${API_URL}/posts/${id}` : null
  );

  return {
    data,
    error,
    isLoading,
  };
};
