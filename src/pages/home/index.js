import useFetch from "../../hooks/use-fetch";
import Categories from "../../components/categories";
import Hero from "../../layouts/hero";
import StatsCard from "../../components/stats-card";
import Loading from "../../components/loading";
import Title from "../../components/title";
import ProductCard from "../../components/product-card";
import Testimonial from "../../components/testimonial";

const Home = () => {
  const { apiData } = useFetch("https://fakestoreapi.com/products?limit=7");

  return (
    <>
      <Hero />
      <Title title="Categories" altTitle="All Categories" />
      <Categories />
      <Title title="Products" altTitle="Most Popular Products" />
      {apiData?.length > 0 ? <ProductCard products={apiData} /> : <Loading />}
      <ProductCard />
      <StatsCard />
      <Testimonial />
    </>
  );
};

export default Home;
