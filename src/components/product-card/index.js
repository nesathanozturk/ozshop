import { Link } from "react-router-dom";
import { BuyIcon } from "../icons";

const ProductCard = ({ product }) => {
  return (
    <>
      <div
        key={product?.id}
        className="lg:w-1/5 md:w-1/4 flex flex-col gap-1 justify-between p-4 w-full border border-opacity-50 mb-4 rounded-lg cursor-pointer hover:scale-105 hover:shadow-lg transform transition duration-500 ease-in-out"
      >
        <Link
          to={`product/${product?.id}`}
          className="block relative h-48 rounded overflow-hidden"
        >
          <img
            src={product?.image}
            alt={product?.title}
            className="object-cover object-center max-w-full h-full block mx-auto"
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
        </div>
        <Link
          to={`product/${product?.id}`}
          type="button"
          className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:border-none focus:outline-none font-medium rounded-md text-sm mt-5 px-5 py-3 text-center inline-flex justify-center items-center mr-2 transition-all"
        >
          <BuyIcon />
          Buy now
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
