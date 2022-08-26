import { server } from "../config";
import axios from "axios";
import Head from "next/head";
import CoinLists from "../components/CoinsList";
import Link from "next/link";
const CoinList = ({ articles }) => {
  return (
    <div>
      <Head>
        <title>Coins</title>
      </Head>
      {/* {coinData.coins.map((coins) => {
        // eslint-disable-next-line react/jsx-key
        return <CoinLists coins={coins} />;
      })} */}

      {articles.map((article) => {
        // eslint-disable-next-line react/jsx-key
        return <CoinLists article={article} />;
      })}
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
}

// export const getStaticProps = async () => {
//   const data = await axios.get("https://api.coinstats.app/public/v1/coins");

//   return {
//     props: {
//       coinData: data.data,
//     },
//     revalidate: 10,
//   };
// };

export default CoinList;
