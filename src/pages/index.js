import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Juan's Amazon Clone</title>
      </Head>

      {/* Header */}
      <Header/>

      <main className="max-w-screen-2xl mx-auto">
        <Banner />

        <ProductFeed products={products}/>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const url = "https://fakestoreapi.com/products"
  const products = await fetch(url).then((res) => res.json())

  return  { props: { products } }
}
