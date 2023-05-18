import Hero from "../../components/hero/Hero";
import Products from "../../components/products/Products";

const Home = () => {
  return (
    <>
      <Hero />
      <h2 className="text-4xl font-bold text-center mt-20">Products</h2>
      <Products />
    </>
  );
};

export default Home;
