import { useState, useEffect } from "react";
import FeatureCard from "../../components/featureCard/FeatureCard";
import Hero from "../../components/hero/Hero";
import StatsCard from "../../components/statsCard/StatsCard";
import ProductCard from "../../components/productCard/ProductCard";

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
      <FeatureCard />
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
          Products
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          Most Popular Products
        </h1>
      </div>
      {products.length > 0 ? (
        <ProductCard products={products} />
      ) : (
        <div>Loading...</div>
      )}
      <ProductCard />
      <StatsCard />
    </>
  );
};

export default Home;
