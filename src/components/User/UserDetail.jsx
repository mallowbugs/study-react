import Head from "next/head";
import { useRouter } from "node_modules/next/router";
import { PostListByUserId } from "src/components/Post/PostListByUserId";
import { useFetch } from "src/hooks/useFetch";
import { API_URL } from "src/utils/const";

export const UserDetail = () => {
  const router = useRouter();
  const {
    data: user,
    error,
    isLoading,
  } = useFetch(router.query.id ? `${API_URL}/users/${router.query.id}` : null);

  if (isLoading) {
    return <div>ローディング中です</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{user?.name}</title>
      </Head>
      <h1 className="font-bold text-3xl">{user?.name}</h1>
      <h2 className="text-xl font-bold mt-10">詳細</h2>
      <ul className="list-inside list-disc mt-2 text-xl">
        <li>メール：{user?.username}</li>
        <li>アカウント名{user?.address.city}</li>
        <li>電話番号：{user?.phone}</li>
        <li>Webサイト：{user?.website}</li>
        <li>勤務先：{user?.company.name}</li>
      </ul>
      <h2 className="text-xl font-bold mt-10">投稿</h2>
      <div className="mt-2">
        <PostListByUserId id={user?.id}></PostListByUserId>
      </div>
    </div>
  );
};
