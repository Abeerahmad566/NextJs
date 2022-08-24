import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJs</title>
      </Head>
      <h1 className={styles.title}>Hello </h1>
    </div>
  );
}
