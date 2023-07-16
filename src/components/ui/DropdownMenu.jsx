import { Link } from "react-router-dom";
import { navigations } from "../../utils/data";
import avatar from "../../assets/images/user.png";

const DropdownMenu = ({ isMenuOpen, dropdown, setDropdown, handleSignOut }) => {
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
    <>
      <div
        className={`w-full md:flex items-center justify-center gap-4 md:w-auto ${
          isMenuOpen ? "block " : "hidden"
        }`}
        id="navbar-dropdown"
      >
        <ul className="flex flex-col gap-2 md:gap-0 font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-6 md:mt-0 md:border-0 md:bg-white">
          {renderedNavigations}
        </ul>
        <button
          id="dropdownUserAvatarButton"
          data-dropdown-toggle="dropdownAvatar"
          className="hidden md:flex text-sm border-[1px] rounded-full p-1 md:mr-0 bg-gray-200 transition-colors"
          type="button"
          onClick={() => setDropdown(!dropdown)}
        >
          <img className="w-8 h-8" src={avatar} alt="User" />
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
  );
};

export default DropdownMenu;
