import { Link } from "react-router-dom";
import { TiTimes } from "react-icons/ti";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import useCartContext from "../../hooks/use-cart-context";
import { LeftArrow, MasterCardIcon } from "../../components/icons";

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
    <div className="mt-10">
      <div className="lg:flex shadow-md my-10">
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
              {carts?.map((cart) => {
                return (
                  <div
                    key={cart.id}
                    className="sm:flex items-center hover:bg-gray-100 -mx-8 px-6 py-5 relative cursor-pointer"
                  >
                    <div className="flex w-[90%] sm:w-2/5">
                      <div>
                        <img
                          className="w-24 h-24 sm:w-28 sm:h-24"
                          src={cart?.image}
                          alt={cart?.title}
                        />
                      </div>
                      <div className="flex flex-col gap-3 ml-4 flex-grow">
                        <span className="font-bold text-xs sm:text-sm">
                          {cart?.title}
                        </span>
                        <span className="text-gray-500 text-xs capitalize">
                          {cart?.category}
                        </span>
                        <span className="sm:hidden font-semibold text-xs">
                          ${cart?.price}
                        </span>
                        <div className="flex sm:hidden">
                          <svg
                            className="fill-current text-gray-600 w-3 cursor-pointer"
                            viewBox="0 0 448 512"
                            onClick={() => handleChangeAmount(cart, -1)}
                          >
                            <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                          </svg>
                          <input
                            className="mx-2 border text-center w-8"
                            type="text"
                            value={cart?.quantity}
                          />
                          <svg
                            className="fill-current text-gray-600 w-3 cursor-pointer"
                            onClick={() => handleChangeAmount(cart, 1)}
                            viewBox="0 0 448 512"
                          >
                            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="hidden sm:flex justify-center w-1/5">
                      <svg
                        className="fill-current text-gray-600 w-3 cursor-pointer"
                        viewBox="0 0 448 512"
                        onClick={() => handleChangeAmount(cart, -1)}
                      >
                        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                      </svg>
                      <input
                        className="mx-2 border text-center w-8"
                        type="text"
                        value={cart?.quantity}
                      />
                      <svg
                        className="fill-current text-gray-600 w-3 cursor-pointer"
                        onClick={() => handleChangeAmount(cart, 1)}
                        viewBox="0 0 448 512"
                      >
                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                      </svg>
                    </div>
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
                );
              })}
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
        <div id="summary" className="lg:w-1/4 px-8 py-10">
          <h1 className="font-semibold text-2xl border-b pb-8">
            Order Summary
          </h1>
          <div className="mt-4">
            <label className="font-medium inline-block mb-3 text-sm uppercase">
              Shipping
            </label>
            <select className="block p-2 text-gray-600 w-full text-sm">
              <option>Standard shipping - $10.00</option>
            </select>
          </div>
          <div className="py-10">
            <label
              htmlFor="promo"
              className="font-semibold inline-block mb-3 text-sm uppercase"
            >
              Promo Code
            </label>
            <input
              type="text"
              id="promo"
              placeholder="Enter your code"
              className="p-2 text-sm w-full"
            />
          </div>
          <button
            className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase"
            onClick={clearCart}
          >
            Clear All
          </button>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button
              type="button"
              className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
            >
              <MasterCardIcon />
              Pay with MasterCard
            </button>
          </div>
        </div>
      </div>
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
    </div>
  );
};

export default Cart;
