import Head from "next/head";
import { useUser } from "src/hooks/useUser";
import { PostsByUserId } from "src/components/Posts/PostsByUserId";

export const User = () => {
  const { user, error, isLoading } = useUser();

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
        <PostsByUserId id={user?.id}></PostsByUserId>
      </div>
    </div>
  );
};
