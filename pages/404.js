import Link from "next/link";

const PagenotFound = () => {
  return (
    <>
      <h1>Page not Found</h1>
      <h3>Check if you are on the same page</h3>
      <Link href="/">Click here to go to Home</Link>
    </>
  );
};

export default PagenotFound;
