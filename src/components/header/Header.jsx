import { FaShoppingBag } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { navigations } from "../../utils/data";

const Header = () => {
  return (
    <header className="text-gray-600 shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <FaShoppingBag className="text-purple-700" size={30} />
          <span className="ml-3 text-purple-700 text-2xl">Nesatbaba</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {navigations.map((navigation) => (
            <Link
              key={navigation.name}
              to={navigation.path}
              className="mr-5 hover:text-gray-900"
            >
              {navigation.name}
            </Link>
          ))}
        </nav>
        <Link
          to="/cart"
          className="inline-flex items-center gap-2 text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0"
        >
          Cart
          <FiShoppingCart size={20} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
