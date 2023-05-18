import { useState, useEffect } from "react";
import FeatureCard from "../feature-card/FeatureCard";

const Categories = () => {
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
    </>
  );
};

export default Categories;
