import { Link } from "react-router-dom";
import { TiDelete } from "react-icons/ti";
import useCartContext from "../../hooks/use-cart-context";
import { BuyIcon } from "../icons";

const FavoriteProductCard = ({ favorites }) => {
  const { removeProductAtFavorites } = useCartContext();

  const renderedFavoriteProduct = favorites?.map((favorite) => (
    <>
      <div className="lg:w-1/5 md:w-1/4 flex flex-col gap-1 justify-between p-4 w-full border border-opacity-50 mb-4 rounded-lg cursor-pointer hover:scale-105 hover:shadow-lg transform transition duration-500 ease-in-out">
        <Link
          to={`favorite/${favorite?.id}`}
          className="block relative h-48 rounded overflow-hidden"
        >
          <img
            src={favorite?.image}
            alt={favorite?.title}
            className="object-cover object-center max-w-full h-full block mx-auto"
          />
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
            {favorite?.category}
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {favorite?.title}
          </h2>
          <p className="mt-1 text-md font-semibold">${favorite?.price}</p>
        </div>
        <Link
          to={`favorite/${favorite?.id}`}
          className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:border-none focus:outline-none font-medium rounded-md text-sm mt-5 px-5 py-3 text-center inline-flex justify-center items-center mr-2 transition-all"
        >
          <BuyIcon />
          Buy now
        </Link>
        <span
          className="absolute top-2 right-2 text-xl text-red-700 hover:text-red-800 transition-colors lg:text-3xl"
          onClick={() => removeProductAtFavorites(favorite?.id)}
        >
          <TiDelete />
        </span>
      </div>
    </>
  ));

  return renderedFavoriteProduct;
};

export default FavoriteProductCard;
