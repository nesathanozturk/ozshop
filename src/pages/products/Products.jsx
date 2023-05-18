import { useState, useEffect } from "react";
import FeatureCard from "../../components/feature-card/FeatureCard";
import ProductCard from "../../components/product-card/ProductCard";

const Products = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      console.log(data);
      setCategories(data);
    };
    fetchCategories();
  }, []);

  if (categories.length === 0) return <h1>Loading...</h1>;

  return (
    <>
      <FeatureCard cards={categories} />
      <ProductCard />
    </>
  );
};

export default Products;
