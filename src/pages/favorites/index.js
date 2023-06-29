import { RiErrorWarningFill } from "react-icons/ri";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
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

export default Favorites;
