import AboutStyles from "@/styles/About.module.css";
import HomeStyles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Tawatchai</title>
        <meta name="keyword" content="tawatchai,home" />
      </Head>
      <div className={HomeStyles.container}>
        <h1 className={HomeStyles.titleHeader}>About page</h1>
        <Image src="/about.svg" width={480} height={480} alt="about" />
      </div>
    </>
  );
}
