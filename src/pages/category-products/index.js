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
      {apiData.length === 0 ? (
        <Loading />
      ) : (
        <div className="px-6 md:px-0 py-8">
          <div className="flex md:gap-10 md:justify-center flex-wrap">
            <ProductCard products={apiData} />
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryProducts;
