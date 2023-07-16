import { DownloadIcon, PlacesIcon, UsersIcon } from "../icons";

const StatsCard = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto px-5 mt-10">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Statistics Of Our Company
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt autem
            necessitatibus laudantium quam atque nam, explicabo at, inventore
            magni minima, veniam expedita consequatur sapiente est animi rerum
            consectetur ipsa nesciunt?
          </p>
        </div>
        <div className="flex justify-center flex-wrap text-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full cursor-pointer">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <DownloadIcon />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                2.7K
              </h2>
              <p className="leading-relaxed">Downloads</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full cursor-pointer">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <UsersIcon />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                1.3K
              </h2>
              <p className="leading-relaxed">Users</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full cursor-pointer">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <PlacesIcon />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                46
              </h2>
              <p className="leading-relaxed">Places</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsCard;
