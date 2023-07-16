import { Link } from "react-router-dom";
import { RightArrow } from "../icons";

const FeatureCard = ({ cards }) => {
  const renderedCards = cards?.map((card, i) => (
    <Link
      key={i}
      to={`/categories/${card}`}
      className="p-4 md:w-1/4 cursor-pointer"
    >
      <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:bg-gray-200 transition-colors">
        <div className="flex items-center mb-3">
          <h2 className="text-gray-900 text-lg title-font font-medium capitalize">
            {card || "Category Title"}
          </h2>
        </div>
        <div className="flex-grow">
          <p className="leading-relaxed text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque,
            repellat.
          </p>
          <p className="mt-3 text-indigo-500 inline-flex items-center">
            Go to Category
            <RightArrow />
          </p>
        </div>
      </div>
    </Link>
  ));

  return renderedCards;
};

export default FeatureCard;
