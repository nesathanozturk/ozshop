import { RiErrorWarningFill } from "react-icons/ri";
import useCartContext from "../../hooks/use-cart-context";
import FavoriteProductCard from "../../components/favorite-product-card";
import Title from "../../components/title";

const Favorites = () => {
  const { favorites } = useCartContext();

  return (
    <>
      {favorites.length > 0 ? (
        <>
          <Title title="Favorites" altTitle="Your Favorite Products" />
          {favorites.map((favorite) => (
            <div className="p-8">
              <div className="flex md:gap-10 flex-wrap">
                <FavoriteProductCard favorites={favorites} />
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="bg-[#feebc8] p-5">
          <p className="text-lg flex items-center">
            <RiErrorWarningFill className="text-[#dd6b20] mr-2" />
            There is nothing in your favorites!
          </p>
        </div>
      )}
    </>
  );
};

export default Favorites;
