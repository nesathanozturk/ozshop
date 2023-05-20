import { useEffect } from "react";
import useCartContext from "../../hooks/use-cart-context";
import FeatureCard from "../feature-card";
import Loading from "../loading";

const Categories = () => {
  const { categories, getCategories } = useCartContext();

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      {categories.length === 0 ? (
        <Loading />
      ) : (
        <FeatureCard cards={categories} />
      )}
    </>
  );
};

export default Categories;