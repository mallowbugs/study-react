import useSWR from "swr";

export const usePost = (id) => {
  const { data, error, isLoading } = useSWR(
    id ? `https://jsonplaceholder.typicode.com/posts/${id}` : null
  );

  return {
    data,
    error,
    isLoading,
  };
};
