import Link from "next/Link";
const CoinList = ({ article }) => {
  return (
    <>
      <Link href={`/coins/${article.id}`}>
        <a>
          <h3>{article.title} &rarr;</h3>
        </a>
      </Link>
    </>
  );
};

export default CoinList;
