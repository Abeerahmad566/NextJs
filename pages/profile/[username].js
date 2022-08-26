import Head from "next/head";
import { useRouter } from "next/router";

const Profile = () => {
  const router = useRouter();
  const { username } = router.query;
  return (
    <>
      <Head>
        <title>{username} Profile</title>
      </Head>
      <h1>Hello {username}!</h1>
    </>
  );
};

export default Profile;
