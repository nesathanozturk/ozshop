import axios from "axios";
import { useState, useEffect } from "react";
import FeatureCard from "../feature-card/FeatureCard";
import Loading from "../loading/Loading";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/categories",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.data;
        setCategories(data);
      } catch (e) {
        throw new Error(e, "Something went wrong");
      }
    };
    getCategories();
  }, []);

  if (categories.length === 0) return <Loading />;

  return (
    <>
      <FeatureCard cards={categories} />
    </>
  );
};

export default Categories;
