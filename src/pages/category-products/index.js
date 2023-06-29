import { useParams } from "react-router-dom";
import useFetch from "../../hooks/use-fetch";
import ProductCard from "../../components/product-card";
import Title from "../../components/title";
import Loading from "../../components/loading";

const CategoryProducts = () => {
  const { name } = useParams();

  const { apiData } = useFetch(
    `https://fakestoreapi.com/products/category/${name}`
  );

  return (
    <>
      <Title title="Category" altTitle={name} />
      {apiData.length === 0 ? <Loading /> : <ProductCard products={apiData} />}
    </>
  );
};

export default CategoryProducts;
