import Link from "next/link";
import styles from "../../styles/navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/coins">Coins</Link>
      </div>
    </div>
  );
};

export default Navbar;
