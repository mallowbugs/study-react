export const fetcher = async (url) => {
  const responce = await fetch(url);

  if (!responce.ok) {
    throw new Error(
      `エラーにより、${url}というURLからデータは取得できませんでした〜`
    );
  }

  const json = await responce.json();

  return json;
};
