import { Link } from "react-router-dom";

const FeatureCard = ({ cards }) => {
  return (
    <Link
      key={cards?.id}
      to={`/categories/${cards}`}
      className="p-4 md:w-1/4 cursor-pointer"
    >
      <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:bg-gray-200 transition-colors">
        <div className="flex items-center mb-3">
          <h2 className="text-gray-900 text-lg title-font font-medium capitalize">
            {cards || "Card Title"}
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
  );
};

export default FeatureCard;
