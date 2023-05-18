import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductCard from "../../components/product-card/ProductCard";

const CategoryProducts = () => {
  const [products, setProducts] = useState([]);

  const { name } = useParams();

  useEffect(() => {
    const fetchCategory = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${name}`
      );
      const data = await response.json();
      setProducts(data);
    };
    fetchCategory();
  }, []);

  if (products.length === 0) return <div>Loading...</div>;

  return <ProductCard products={products} />;
};

export default CategoryProducts;
