import styles from "@styles/components/Navbar.module.css";
import Link from "next/link";
import totalCart from "utils/totalCart";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.home} ><a className={styles.logo}>SEGUE</a></Link>
      <ul>
        <li><Link href="/products" ><a>Products</a></Link></li>
        <li><Link href="/cart" ><a>Cart <span>{totalCart()}</span></a></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
