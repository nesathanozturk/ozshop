import { Link } from "react-router-dom";
import { TiDelete } from "react-icons/ti";
import useCartContext from "../../hooks/use-cart-context";

const FavoriteProductCard = ({ favorites }) => {
  const { removeProductAtFavorites } = useCartContext();

  return (
    <>
      <div className="lg:w-1/5 md:w-1/4 flex flex-col gap-1 justify-between p-4 w-full border border-opacity-50 mb-4 rounded-lg cursor-pointer hover:scale-105 hover:shadow-lg transform transition duration-500 ease-in-out">
        <Link
          to={`favorite/${favorites?.id}`}
          className="block relative h-48 rounded overflow-hidden"
        >
          <img
            src={favorites?.image}
            alt={favorites?.title}
            className="object-cover object-center max-w-full h-full block mx-auto"
          />
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
            {favorites?.category}
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {favorites?.title}
          </h2>
          <p className="mt-1 text-md font-semibold">${favorites?.price}</p>
        </div>
        <Link
          to={`favorite/${favorites?.id}`}
          className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:border-none focus:outline-none font-medium rounded-md text-sm mt-5 px-5 py-3 text-center inline-flex justify-center items-center mr-2 transition-all"
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
        </Link>
        <span
          className="absolute top-2 right-2 text-xl text-red-700 hover:text-red-800 transition-colors lg:text-3xl"
          onClick={() => removeProductAtFavorites(favorites?.id)}
        >
          <TiDelete />
        </span>
      </div>
    </>
  );
};

export default FavoriteProductCard;
