const Title = ({ title, altTitle }) => {
  return (
    <div className="flex flex-col text-center w-full mt-20">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
        {title}
      </h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
        {altTitle}
      </h1>
    </div>
  );
};

export default Title;
