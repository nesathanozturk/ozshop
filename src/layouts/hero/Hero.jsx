import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font px-4">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col-reverse items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Huge Summer Collection
          </h1>
          <p className="mb-8 leading-relaxed">
            Everything you need for the summer! Swimmers, bikinis, shorts,
            t-shirts, flip-flops, sunglasses, hats, and more!
          </p>
          <div className="flex justify-center">
            <Link
              to="/products"
              className="inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0 transition-colors"
            >
              Show Now
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-xl lg:w-full md:w-1/2 w-full mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="Hero"
            src="https://www.bethesdatailors.com/wp-content/uploads/2021/01/Reliable-Clothes-Store-for-All-in-NSW.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;