import { useState, useEffect } from "react";
import FeatureCard from "../../components/featureCard/FeatureCard";
import Hero from "../../components/hero/Hero";
import StatsCard from "../../components/statsCard/StatsCard";
import ProductsCard from "../../components/productsCard/ProductsCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products?limit=12"
      );
      const data = await response.json();
      setProducts(data);
      console.log(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Hero />
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
          Products
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          Most Popular Products
        </h1>
      </div>
      {products.length > 0 ? (
        <ProductsCard products={products} />
      ) : (
        <div>Loading...</div>
      )}
      <ProductsCard />
      <FeatureCard />
      <StatsCard />
    </>
  );
};

export default Home;
