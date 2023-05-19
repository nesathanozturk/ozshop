import axios from "axios";
import { useState, useEffect } from "react";
import Categories from "../../components/categories/Categories";
import Hero from "../../components/hero/Hero";
import StatsCard from "../../components/stats-card/StatsCard";
import Loading from "../../components/loading/Loading";
import Title from "../../components/title/Title";
import ProductCard from "../../components/product-card/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          "https://fakestoreapi.com/products?limit=6",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.data;
        setProducts(data);
      } catch (e) {
        throw new Error(e, "Something went wrong");
      }
    };
    getProducts();
  }, []);

  return (
    <>
      <Hero />
      <Title title="Categories" titleAlt="All Categories" />
      <Categories />
      <Title title="Products" titleAlt="Most Popular Products" />
      {products?.length > 0 ? <ProductCard products={products} /> : <Loading />}
      <ProductCard />
      <StatsCard />
    </>
  );
};

export default Home;
