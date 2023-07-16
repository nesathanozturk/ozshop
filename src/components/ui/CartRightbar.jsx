import { MasterCardIcon } from "../icons";

const CartRightbar = ({ clearCart, total }) => {
  return (
    <>
      <div id="summary" className="lg:w-1/4 px-8 py-10">
        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
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
    </>
  );
};

export default CartRightbar;
