import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductCard from "../../components/product-card/ProductCard";
import Title from "../../components/title/Title";
import Loading from "../../components/loading/Loading";

const CategoryProducts = () => {
  const [products, setProducts] = useState([]);

  const { name } = useParams();

  useEffect(() => {
    const getCategory = async () => {
      try {
        const res = await axios.get(
          `https://fakestoreapi.com/products/category/${name}`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.data;
        setProducts(data);
      } catch (err) {
        throw new Error(err);
      }
    };
    getCategory();
  }, []);

  return (
    <>
      <Title title="Category" titleAlt={name} />
      {products.length === 0 ? (
        <Loading />
      ) : (
        <ProductCard products={products} />
      )}
    </>
  );
};

export default CategoryProducts;
