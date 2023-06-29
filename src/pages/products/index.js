import useFetch from "../../hooks/use-fetch";
import Categories from "../../components/categories";
import ProductCard from "../../components/product-card";
import Title from "../../components/title";
import Loading from "../../components/loading";

const Products = () => {
  const { apiData } = useFetch("https://fakestoreapi.com/products");

  return (
    <>
      <Title title="Categories" altTitle="All Categories" />
      <Categories />
      <Title title="Products" altTitle="All Products" />
      {apiData.length > 0 ? (
        <div className="py-8">
          <div className="flex md:gap-10 md:justify-center flex-wrap">
            <ProductCard products={apiData} />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Products;
