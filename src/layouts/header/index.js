import { FaShoppingBag } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link, useMatch } from "react-router-dom";
import { useSignOut, useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";
import { auth } from "../../firebase";
import { navigations } from "../../utils/data";
import avatar from "../../assets/images/user.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  const searchRoute = useMatch("/sign-in") + useMatch("/sign-up");

  const handleSignOut = async () => {
    const success = await signOut();
    if (success) {
      alert("You are sign out!");
    }
  };

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
    <nav className="shadow-lg text-gray-600 relative">
      <div className="max-w-screen-xl flex flex-wrap items-center max-xs:justify-center justify-between mx-auto p-5">
        <Link
          to="/"
          className="flex font-medium items-center text-gray-900 md:mb-0"
        >
          <FaShoppingBag className="text-purple-700" size={30} />
          <span className="ml-3 text-purple-700 text-2xl">Nesatbaba</span>
        </Link>
        {searchRoute ? null : (
          <>
            <div className={`items-center gap-1 ${user ? "flex" : "hidden"}`}>
              <Link
                to="/cart"
                className="inline md:hidden mb-3 mr-2 text-white bg-indigo-500 border-1 border-indigo-600 py-2 px-3 focus:outline-none hover:bg-indigo-700 rounded mt-4 md:mt-0 transition-colors"
              >
                <FiShoppingCart size={18} />
              </Link>
              <button
                id="dropdownUserAvatarButton"
                data-dropdown-toggle="dropdownAvatar"
                className="flex md:hidden text-sm border-[1px] rounded-full p-1 md:mr-0 bg-gray-200 transition-colors"
                type="button"
                onClick={() => setDropdown(!dropdown)}
              >
                <img className="w-8 h-8 rounded-full" src={avatar} alt="User" />
              </button>
              <div
                id="dropdownAvatar"
                className={`z-10 md:hidden bg-white divide-y absolute max-xs:top-28 max-xs:left-4 xs:top-[4.8rem] xs:right-[4.5rem] divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 ${
                  dropdown ? "block" : "hidden"
                }`}
              >
                <div className="py-2">
                  <a
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white cursor-pointer"
                    onClick={handleSignOut}
                  >
                    Sign out
                  </a>
                </div>
              </div>
              <button
                data-collapse-toggle="navbar-dropdown"
                type="button"
                className="inline-flex items-center mt-1 p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-200 focus:outline-none"
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
                isMenuOpen ? "block " : "hidden"
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
              <button
                id="dropdownUserAvatarButton"
                data-dropdown-toggle="dropdownAvatar"
                className="hidden md:flex text-sm border-[1px] rounded-full p-1 md:mr-0 bg-gray-200 transition-colors"
                type="button"
                onClick={() => setDropdown(!dropdown)}
              >
                <img className="w-8 h-8 rounded-full" src={avatar} alt="User" />
              </button>
              <div
                id="dropdownAvatar"
                className={`z-10 hidden bg-white divide-y absolute top-[4.3rem] right-5 divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 ${
                  dropdown ? "md:block" : "hidden"
                }`}
              >
                <div className="py-2">
                  <a
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white cursor-pointer"
                    onClick={handleSignOut}
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
