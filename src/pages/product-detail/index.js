import { BiArrowBack } from "react-icons/bi";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useCartContext from "../../hooks/use-cart-context";
import Loading from "../../components/loading";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import noImage from "../../assets/images/no-image.png";

const ProductDetail = () => {
  const { product, getProductDetail, addProductToCart, addProductToFavorites } =
    useCartContext();

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
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-indigo-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-indigo-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-indigo-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-indigo-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-indigo-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
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
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                          >
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
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
                    <div className="flex justify-between items-center">
                      <button
                        className="flex ml-auto text-white bg-indigo-500 border-0 text-sm md:text-base py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded transition-all"
                        onClick={() => addProductToCart(product)}
                      >
                        Add to cart
                      </button>
                      <button
                        onClick={() => addProductToFavorites(product)}
                        className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 hover:bg-gray-300 transition-all"
                      >
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      <ToastContainer
        position="top-left"
        autoClose={1500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default ProductDetail;
