import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ProductStyles from "@/styles/Product.module.css";

export async function getStaticProps() {
  const res = await fetch("https://dummyjson.com/products?limit=10");
  const data = await res.json();

  return {
    props: { products: data.products },
  };
}

export default function ProductsIndex({ products }) {
  return (
    <>
      <Head>
        <title>Products | Tawatchai</title>
        <meta name="keyword" content="tawatchai,home" />
      </Head>
      <div className={ProductStyles.container}>
        {products.map((item) => (
          <Link href={"/products/" + item.id}>
            <div key={item.id}>
              <Image
                src={item.thumbnail}
                width={360}
                height={360}
                alt={item.title}
              />
              <h2 className={ProductStyles.title}>{item.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
