import { BiArrowBack } from "react-icons/bi";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/loading";
import { BottomArrow, ReviewStar } from "../../components/icons";
import Toastify from "../../components/toastify";
import useCartContext from "../../hooks/use-cart-context";
import noImage from "../../assets/images/no-image.png";

const FavoriteProductDetail = () => {
  const { product, getProductDetail, addProductToCart } = useCartContext();

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getProductDetail(id);
  }, []);

  return (
    <>
      {product?.length > 0 ? (
        <Loading />
      ) : (
        <section className="text-gray-600 body-font overflow-hidden relative">
          <span
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 absolute top-10 left-10 cursor-pointer"
          >
            <BiArrowBack size={25} />
            <p>Back</p>
          </span>
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                src={!product?.image ? noImage : product?.image}
                alt={product?.title}
                className="lg:w-1/2 w-full lg:h-auto max-h-[400px] h-64 object-center rounded object-contain"
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
                  {!product?.category
                    ? "Category loading..."
                    : product?.category}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {!product?.title ? "Item title loading..." : product?.title}
                </h1>
                {!product.rating ? (
                  <p className="leading-relaxe">Product rating loading...</p>
                ) : (
                  <div className="flex mb-4 mt-3">
                    <span className="flex items-center">
                      <ReviewStar />
                      <span className="text-gray-600 ml-3">4 Reviews</span>
                    </span>
                  </div>
                )}
                <p className="leading-relaxed">
                  {!product.description
                    ? "Product description loading..."
                    : product?.description}
                </p>
                {product?.category === "men's clothing" ||
                product?.category === "women's clothing" ? (
                  <div className="flex mt-2 items-center pb-5 border-b-2 border-gray-100 mb-5">
                    <div className="flex">
                      <span className="mr-3">Color</span>
                      <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                      <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                      <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                    </div>
                    <div className="flex ml-6 items-center">
                      <span className="mr-3">Size</span>
                      <div className="relative">
                        <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                          <option>SM</option>
                          <option>M</option>
                          <option>L</option>
                          <option>XL</option>
                        </select>
                        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                          <BottomArrow />
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="mt-4"></div>
                )}
                <div className="flex gap-4">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    {!product.price ? "Price loading..." : `$${product?.price}`}
                  </span>
                  {!product.title ? (
                    <></>
                  ) : (
                    <button
                      className="flex text-white bg-indigo-500 border-0 text-sm md:text-base py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded transition-all"
                      onClick={() => addProductToCart(product)}
                    >
                      Add to cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      <Toastify />
    </>
  );
};

export default FavoriteProductDetail;
