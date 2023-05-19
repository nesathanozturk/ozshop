import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useCartContext from "../../hooks/use-cart-context";
import ProductCard from "../../components/product-card/ProductCard";
import Title from "../../components/title/Title";
import Loading from "../../components/loading/Loading";

const CategoryProducts = () => {
  const { products, getCategory } = useCartContext();
  const { name } = useParams();

  useEffect(() => {
    getCategory(name);
  }, []);

  return (
    <>
      <Title title="Category" altTitle={name} />
      {products.length === 0 ? (
        <Loading />
      ) : (
        <ProductCard products={products} />
      )}
    </>
  );
};

export default CategoryProducts;
