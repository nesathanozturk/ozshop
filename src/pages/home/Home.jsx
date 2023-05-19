import { useEffect } from "react";
import useCartContext from "../../hooks/use-cart-context";
import Categories from "../../components/categories/Categories";
import Hero from "../../components/hero/Hero";
import StatsCard from "../../components/stats-card/StatsCard";
import Loading from "../../components/loading/Loading";
import Title from "../../components/title/Title";
import ProductCard from "../../components/product-card/ProductCard";

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
