import useCartContext from "../../hooks/use-cart-context";
import { useEffect } from "react";
import Categories from "../../components/categories/Categories";
import ProductCard from "../../components/product-card/ProductCard";
import Title from "../../components/title/Title";
import Loading from "../../components/loading/Loading";

const Products = () => {
  const { products, getAllProducts } = useCartContext();

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <Title title="Categories" altTitle="All Categories" />
      <Categories />
      <Title title="Products" altTitle="All Products" />
      {products.length > 0 ? <ProductCard products={products} /> : <Loading />}
      <ProductCard />
    </>
  );
};

export default Products;
