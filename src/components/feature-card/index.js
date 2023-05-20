import { Link } from "react-router-dom";

const FeatureCard = ({ cards = [] }) => {
  const renderedCards = cards?.map((card) => (
    <Link
      key={card}
      to={`/categories/${card}`}
      className="p-4 md:w-1/4 cursor-pointer"
    >
      <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:bg-gray-200 transition-colors">
        <div className="flex items-center mb-3">
          <h2 className="text-gray-900 text-lg title-font font-medium capitalize">
            {card || "Card Title"}
          </h2>
        </div>
        <div className="flex-grow">
          <p className="leading-relaxed text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque,
            repellat.
          </p>
          <a
            href="#learnmore"
            className="mt-3 text-indigo-500 inline-flex items-center"
          >
            Go to Category
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </Link>
  ));

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap -m-4">{renderedCards}</div>
      </div>
    </section>
  );
};

export default FeatureCard;
