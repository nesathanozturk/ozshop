import { Link } from "react-router-dom";

const ProductCard = ({ products = [] }) => {
  const renderedProduct = products.map((product) => (
    <Link
      key={product?.id}
      to={`/product/${product?.id}`}
      className="lg:w-1/4 md:w-1/4 p-4 w-full border border-opacity-50 mb-4 rounded-lg cursor-pointer hover:scale-105 hover:shadow-lg transform transition duration-500 ease-in-out"
    >
      <Link
        to={`product/${product?.id}`}
        className="block relative h-48 rounded overflow-hidden"
      >
        <img
          src={product?.image}
          alt={product?.title}
          className="object-contain object-center w-full h-full block"
        />
      </Link>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
          {product?.category}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {product?.title}
        </h2>
        <p className="mt-1 text-md font-semibold">${product?.price}</p>

        <button
          type="button"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mt-5 px-5 py-3 text-center inline-flex justify-center items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5 mr-2 -ml-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
          </svg>
          Buy now
        </button>
      </div>
    </Link>
  ));

  return (
    <section className="text-gray-600 body-font">
      <div className="px-5 py-8">
        <div className="flex md:gap-10 md:justify-center flex-wrap">
          {renderedProduct}
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
