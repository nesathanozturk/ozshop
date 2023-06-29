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
          <div className="p-8 flex md:gap-10 flex-wrap">
            {favorites?.map((favorite) => (
              <FavoriteProductCard key={favorite.id} favorites={favorite} />
            ))}
          </div>
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
