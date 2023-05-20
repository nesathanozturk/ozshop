import useCartContext from "../../hooks/use-cart-context";
import { useEffect } from "react";
import Categories from "../../components/categories";
import ProductCard from "../../components/product-card";
import Title from "../../components/title";
import Loading from "../../components/loading";

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
