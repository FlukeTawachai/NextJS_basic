import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Tawatchai</title>
        <meta name="keyword" content="tawatchai,home"/>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.titleHeader}>Home page</h1>
        <Image src="/shopping.svg" width={480} height={480} alt="shopping" />
        <Link href="/products" className={styles.primaryBottom}>
          {" "}
          แสดงสินค้า{" "}
        </Link>
      </div>
    </>
  );
}
