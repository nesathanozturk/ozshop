const CartProduct = ({ cart, handleChangeAmount }) => {
  return (
    <>
      <div className="flex w-[90%] sm:w-2/5">
        <div>
          <img
            className="w-24 h-24 sm:w-28 sm:h-24"
            src={cart?.image}
            alt={cart?.title}
          />
        </div>
        <div className="flex flex-col gap-3 ml-4 flex-grow">
          <span className="font-bold text-xs sm:text-sm">{cart?.title}</span>
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
    </>
  );
};

export default CartProduct;
