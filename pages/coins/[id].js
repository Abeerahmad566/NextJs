import { useRouter } from "next/router";
import axios from "axios";

const CoinId = ({ coin }) => {
  console.log(coin);
  return (
    <>
      <img src={coin.icon} />
      <h3>Name:{coin.name} &rarr;</h3>
      <h3>Rank:{coin.rank}</h3>
      <p>Price:{coin.price}</p>
      <p>
        Symbol:<strong>{coin.symbol}</strong>
      </p>
      <p>URL:{coin.websiteUrl}</p>
    </>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://api.coinstats.app/public/v1/coins/${context.params.id} `
  );
  const coin = await res.json();
  console.log(coin);
  return {
    props: {
      coin: coin.coin,
    },
  };
}

// export async function getStaticProps(context) {
//   const res = await fetch(
//     `https://api.coinstats.app/public/v1/coins/${context.params.id} `
//   );
//   const coin = await res.json();
//   return {
//     props: {
//       coin: coin.coin,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const res = await axios.get(`https://api.coinstats.app/public/v1/coins`);

//   //   console.log(res);
//   const ids = res.data.map((coin) => coin.id);
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));
//   return {
//     paths,
//     fallback: false,
//   };
// }

export default CoinId;
