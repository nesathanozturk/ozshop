import { useNavigate, Link } from "react-router-dom";
import { NotFoundIcon } from "../../components/icons";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex justify-center items-center text-center">
      <div className="flex flex-col justify-center items-center gap-6 mt-24">
        <NotFoundIcon />
        <div className="tracking-widest mt-4">
          <span className="text-gray-500 text-6xl block">
            <span>4 0 4</span>
          </span>
          <span className="text-gray-500 text-xl">
            Sorry, We couldn't find what you are looking for!
          </span>
        </div>
        <Link
          className="text-gray-500 font-mono text-xl bg-gray-200 p-3 rounded-md hover:shadow-md cursor-pointer"
          onClick={() => navigate("/")}
        >
          Go back
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
