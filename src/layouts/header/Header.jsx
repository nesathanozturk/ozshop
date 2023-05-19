import { FaShoppingBag } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { navigations } from "../../utils/data";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderedNavigations = navigations.map((navigation) => (
    <Link
      key={navigation.name}
      to={navigation.path}
      className="hover:text-gray-900"
    >
      {navigation.name}
    </Link>
  ));

  return (
    <nav className="shadow-lg text-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
        <Link
          to="/"
          className="flex font-medium items-center text-gray-900 md:mb-0"
        >
          <FaShoppingBag className="text-purple-700" size={30} />
          <span className="ml-3 text-purple-700 text-2xl">Nesatbaba</span>
        </Link>
        <div className="flex items-center gap-1">
          <Link
            to="/cart"
            className="inline md:hidden mb-3 text-white bg-indigo-500 border-1 border-indigo-600 py-2 px-3 focus:outline-none hover:bg-indigo-700 rounded mt-4 md:mt-0 transition-colors"
          >
            <FiShoppingCart size={18} />
          </Link>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center mt-1 p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-200 focus:outline-none"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`w-full md:flex items-center justify-center gap-4 md:w-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col gap-2 md:gap-0 font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-6 md:mt-0 md:border-0 md:bg-white">
            {renderedNavigations}
          </ul>
          <Link
            to="/cart"
            className="hidden md:inline-flex items-center gap-2 text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0 transition-colors"
          >
            Cart
            <FiShoppingCart size={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
