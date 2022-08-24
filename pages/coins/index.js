import axios from "axios";
import Image from "next/image";
const CoinList = ({ coinData }) => {
  console.log(coinData);
  return (
    <div>
      {coinData.coins.map((coins) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div>
            <h1>{coins.name}</h1>
            <img src={coins.icon} alt="Picture of the author" />
            <p>{coins.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await axios.get(
    "https://api.coinstats.app/public/v1/coins?skip=0"
  );

  return {
    props: {
      coinData: data.data,
    },
    revalidate: 10,
  };
};

export default CoinList;
