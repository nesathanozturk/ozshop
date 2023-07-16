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
      {categories?.length === 0 ? (
        <Loading />
      ) : (
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-wrap -m-4">
              <FeatureCard cards={categories} />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Categories;
