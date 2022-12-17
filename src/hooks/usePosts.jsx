import useSWR from "swr";

const fetcher = async (url) => {
  const responce = await fetch(url);

  if (!responce.ok) {
    throw new Error(
      `エラーにより、${url}というURLからデータは取得できませんでした〜`
    );
  }

  const json = await responce.json();

  return json;
};

export const usePosts = () => {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  return {
    data,
    error,
    isLoading,
    isEmpty: data && data.length === 0,
  };
};
