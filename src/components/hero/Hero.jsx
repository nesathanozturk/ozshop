const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Huge Summer Collection
          </h1>
          <p className="mb-8 leading-relaxed">
            Everything you need for the summer! Swimmers, bikinis, shorts,
            t-shirts, flip-flops, sunglasses, hats, and more!
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Show Now
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://www.bethesdatailors.com/wp-content/uploads/2021/01/Reliable-Clothes-Store-for-All-in-NSW.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
