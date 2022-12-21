import Head from "next/head";
import { Header } from "src/components/Header";
import { Users as UsersCompornent } from "src/components/Users";

const Users = () => {
  return (
    <div>
      <Head>
        <title>Users page</title>
      </Head>
      <Header />
      <UsersCompornent />
    </div>
  );
};

export default Users;
