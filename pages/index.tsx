import styles from "@styles/views/Landing.module.css";
import { NextPage } from "next";
import Head from "next/head"
import AvocadoImg from "@images/avocado.png";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Avocado Store</title>
      </Head>
      <div className={styles.landing}>
        <nav className={styles.nav}>
          <h1>Change</h1>
          <div className={styles.options}>
            <ul>
              <li>
                <Link href="/products">
                  <a>Products</a>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className={styles.banner}>
          <div className={styles.section}>
            <div className={styles.title}>
              <h1>Find your favorite</h1>
              <span>AVOCADO</span>
              <h1>In just few steps</h1>
            </div>
            <p>A place where you can see and buy all types of avocados</p>
            <Link href="/products">
              <button className={styles.button}>Start now</button>
            </Link>
          </div>

          <div className="">
            <img src={AvocadoImg.src} alt="Avocado" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
