import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { useMatch } from "react-router-dom";

const Footer = () => {
  const searchRoute = useMatch("/sign-in") + useMatch("/sign-up");

  return (
    <>
      {searchRoute ? null : (
        <footer className="text-gray-600 bg-gray-100 body-font">
          <div className="container px-5 py-12 mt-28 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left">
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">
                  Support
                </h2>
                <nav className="list-none mb-10">
                  <li className="mb-2">
                    <a
                      href="#"
                      className="text-gray-600 cursor-pointer hover:underline"
                    >
                      Help Center
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="#"
                      className="text-gray-600 cursor-pointer hover:underline"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="#"
                      className="text-gray-600 cursor-pointer hover:underline"
                    >
                      Status
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="#"
                      className="text-gray-600 cursor-pointer hover:underline"
                    >
                      Privaciy Policy
                    </a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">
                  Customer Information
                </h2>
                <nav className="list-none mb-10">
                  <li className="mb-2">
                    <a
                      href="#"
                      className="text-gray-600 cursor-pointer hover:underline"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="#"
                      className="text-gray-600 cursor-pointer hover:underline"
                    >
                      FAQ's
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="#"
                      className="text-gray-600 cursor-pointer hover:underline"
                    >
                      Sell Your Items
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="#"
                      className="text-gray-600 cursor-pointer hover:underline"
                    >
                      Contact Us
                    </a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">
                  Company
                </h2>
                <nav className="list-none mb-10">
                  <li className="mb-2">
                    <a
                      href="#"
                      className="text-gray-600 cursor-pointer hover:underline"
                    >
                      Press
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="#"
                      className="text-gray-600 cursor-pointer hover:underline"
                    >
                      Carreers
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="#"
                      className="text-gray-600 cursor-pointer hover:underline"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="#"
                      className="text-gray-600 cursor-pointer hover:underline"
                    >
                      Partners
                    </a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">
                  Follow Us
                </h2>
                <nav className="list-none mb-10">
                  <li className="mb-2">
                    <a
                      href="https://www.instagram.com/nesathanozturk/"
                      className="text-gray-600 cursor-pointer hover:underline"
                    >
                      Instagram
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="#"
                      className="text-gray-600 cursor-pointer hover:underline"
                    >
                      Twitter
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://www.linkedin.com/in/nesathanozturk"
                      className="text-gray-600 cursor-pointer hover:underline"
                    >
                      Linkedin
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="#"
                      className="text-gray-600 cursor-pointer hover:underline"
                    >
                      Facebook
                    </a>
                  </li>
                </nav>
              </div>
            </div>
          </div>
          <div>
            <div className="container mx-auto py-6 px-5 flex justify-center gap-3 items-center flex-wrap flex-col">
              <p className="text-gray-500 text-base text-center sm:text-left">
                © 2023 Ozshop. All rights reserved. -
                <a
                  href="https://instagram.com/nesathanozturk"
                  rel="noopener noreferrer"
                  className="text-gray-600 ml-1 hover:underline"
                  target="_blank"
                >
                  @nesathanozturk
                </a>
              </p>
              <div className="flex sm:mt-0 mt-2 justify-center flex-wrap">
                <a
                  href="https://www.instagram.com/nesathanozturk/"
                  title="Instagram"
                >
                  <AiOutlineInstagram
                    size={30}
                    className="text-gray-600 hover:text-gray-700 ml-3"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/nesathanozturk"
                  title="Linkedin"
                >
                  <AiFillLinkedin
                    size={30}
                    className="text-gray-600 hover:text-gray-700 ml-3"
                  />
                </a>
                <a href="https://www.github.com/nesathanozturk" title="Github">
                  <AiFillGithub
                    className="text-gray-600 hover:text-gray-700 ml-3"
                    size={30}
                  />
                </a>
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
