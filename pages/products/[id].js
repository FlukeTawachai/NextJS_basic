import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import ProductDetailStyles from "@/styles/ProductDetail.module.css";

export async function getStaticPaths() {
  const res = await fetch("https://dummyjson.com/products?limit=10");
  const data = await res.json();
  const paths = data.products.map((product) => {
    return {
      params: { id: String(product.id) },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // const router = useRouter();
  // const { id } = router.query;
  const id = params.id;
  const res = await fetch("https://dummyjson.com/products/" + id);
  const data = await res.json();
//   console.log(data);
  return {
    props: { products: data },
  };
}

export default function ProductDetail({ products }) {
  return (
    <>
      <Head>
        <title>{products.title}</title>
        <meta name="keyword" content={products.title} />
      </Head>
      <div className={ProductDetailStyles.container}>
        <div>
          <Image
            src={products.thumbnail}
            width={360}
            height={360}
            alt={products.title}
          />
        </div>
        <div className={ProductDetailStyles.detail}>
          {/* <h1>Id:{products.id}</h1> */}
          <h2>Name: {products.title}</h2>
          <h2>Price: {products.price} $</h2>
          <h2>Brand: {products.brand}</h2>
          <h2>Category: {products.category}</h2>
          <h2>Rating: {products.rating} / 5</h2>
          <p>Description: {products.description}</p>
        </div>
      </div>
    </>
  );
}
