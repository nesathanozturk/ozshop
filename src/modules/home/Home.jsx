import FeatureCard from "../../components/featureCard/FeatureCard";
import Hero from "../../components/hero/Hero";
import StatsCard from "../../components/statsCard/StatsCard";
import Products from "../../components/products/Products";

const Home = () => {
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
      <Products />
      <FeatureCard />
      <StatsCard />
    </>
  );
};

export default Home;
