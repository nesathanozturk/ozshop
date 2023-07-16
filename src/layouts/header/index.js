import { FaShoppingBag } from "react-icons/fa";
import { Link, useMatch } from "react-router-dom";
import { useSignOut, useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";
import { auth } from "../../firebase";
import { HamburgerIcon } from "../../components/icons";
import DropdownMenu from "../../components/ui/DropdownMenu";
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

  return (
    <nav className="shadow-lg text-gray-600 relative">
      <div className="max-w-screen-xl flex flex-wrap items-center max-xs:justify-center justify-between mx-auto p-5">
        <Link
          to="/"
          className="flex font-medium items-center text-gray-900 md:mb-0"
        >
          <FaShoppingBag className="text-purple-700" size={30} />
          <span className="ml-3 text-purple-700 text-2xl">Ozshop</span>
        </Link>
        {searchRoute ? null : (
          <>
            <div className={`items-center gap-1 ${user ? "flex" : "hidden"}`}>
              <button
                id="dropdownUserAvatarButton"
                data-dropdown-toggle="dropdownAvatar"
                className="flex md:hidden text-sm border-[1px] rounded-full p-1 md:mr-0 bg-gray-200 transition-colors"
                type="button"
                onClick={() => setDropdown(!dropdown)}
              >
                <img className="w-7 h-7" src={avatar} alt="User" />
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
                <HamburgerIcon />
              </button>
            </div>
            <DropdownMenu
              dropdown={dropdown}
              setDropdown={setDropdown}
              isMenuOpen={isMenuOpen}
              handleSignOut={handleSignOut}
            />
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
