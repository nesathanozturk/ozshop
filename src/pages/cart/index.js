import { Link } from "react-router-dom";
import { TiTimes } from "react-icons/ti";
import { useEffect } from "react";
import CartRightbar from "../../components/ui/CartRightbar";
import CartProduct from "../../components/ui/CartProduct";
import CartProductAmount from "../../components/ui/CartProductAmount";
import { LeftArrow } from "../../components/icons";
import Toastify from "../../components/toastify";
import useCartContext from "../../hooks/use-cart-context";

const Cart = () => {
  const {
    total,
    carts,
    removeProduct,
    clearCart,
    handleChangeAmount,
    handleProductPrice,
  } = useCartContext();

  useEffect(() => {
    handleProductPrice();
  });

  return (
    <section className="mt-10">
      <div className="lg:flex my-10">
        <div className="lg:w-3/4 bg-white px-10 py-10">
          <div className="flex flex-wrap justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl mb-2">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">{carts?.length} Items</h2>
          </div>
          {carts?.length < 1 ? (
            <div className="flex justify-center items-center my-32">
              <h1 className="text-lg md:text-2xl">No items in your cart</h1>
            </div>
          ) : (
            <>
              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase sm:w-2/5">
                  Product Details
                </h3>
                <h3 className="hidden sm:block font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                  Quantity
                </h3>
                <h3 className="hidden sm:block font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                  Price
                </h3>
              </div>
              {carts?.map((cart) => (
                <div
                  key={cart.id}
                  className="sm:flex items-center hover:bg-gray-100 -mx-8 px-6 py-5 relative cursor-pointer"
                >
                  <CartProduct
                    cart={cart}
                    handleChangeAmount={handleChangeAmount}
                  />
                  <CartProductAmount
                    cart={cart}
                    handleChangeAmount={handleChangeAmount}
                  />
                  <span className="hidden sm:inline text-center w-1/5 font-semibold text-sm">
                    ${cart?.price}
                  </span>
                  <span
                    className="absolute top-3 right-5 font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer"
                    onClick={() => removeProduct(cart?.id)}
                  >
                    <TiTimes size={18} />
                  </span>
                </div>
              ))}
            </>
          )}
          <Link
            to={"/products"}
            className="flex font-semibold text-indigo-600 text-sm mt-10 hover:underline"
          >
            <LeftArrow />
            Continue Shopping
          </Link>
        </div>
        <CartRightbar clearCart={clearCart} total={total} />
      </div>
      <Toastify />
    </section>
  );
};

export default Cart;
