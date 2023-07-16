const CartProductAmount = ({ cart, handleChangeAmount }) => {
  return (
    <>
      <div className="hidden sm:flex justify-center w-1/5">
        <svg
          className="fill-current text-gray-600 w-3 cursor-pointer"
          viewBox="0 0 448 512"
          onClick={() => handleChangeAmount(cart, -1)}
        >
          <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
        <span className="mx-2 border text-center w-8">{cart?.quantity}</span>
        <svg
          className="fill-current text-gray-600 w-3 cursor-pointer"
          onClick={() => handleChangeAmount(cart, 1)}
          viewBox="0 0 448 512"
        >
          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
      </div>
    </>
  );
};

export default CartProductAmount;
