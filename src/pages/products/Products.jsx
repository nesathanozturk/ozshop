import axios from "axios";
import { useState, useEffect } from "react";
import Categories from "../../components/categories/Categories";
import ProductCard from "../../components/product-card/ProductCard";
import Title from "../../components/title/Title";
import Loading from "../../components/loading/Loading";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get("https://fakestoreapi.com/products", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await res.data;
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <>
      <Title title="Categories" titleAlt="All Categories" />
      <Categories />
      <Title title="Products" titleAlt="All Products" />
      {products.length > 0 ? <ProductCard products={products} /> : <Loading />}
      <ProductCard />
    </>
  );
};

export default Products;
