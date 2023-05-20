import { useEffect } from "react";
import useCartContext from "../../hooks/use-cart-context";
import Categories from "../../components/categories";
import Hero from "../../layouts/hero";
import StatsCard from "../../components/stats-card";
import Loading from "../../components/loading";
import Title from "../../components/title";
import ProductCard from "../../components/product-card";

const Home = () => {
  const { products, getProducts } = useCartContext();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Hero />
      <Title title="Categories" altTitle="All Categories" />
      <Categories />
      <Title title="Products" altTitle="Most Popular Products" />
      {products?.length > 0 ? <ProductCard products={products} /> : <Loading />}
      <ProductCard />
      <StatsCard />
    </>
  );
};

export default Home;
