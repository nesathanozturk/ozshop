import { Link } from "react-router-dom";

const ProductsCard = ({ products = [] }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((product) => (
            <Link
              key={product?.id}
              to={`/product/${product?.id}`}
              className="lg:w-1/4 md:w-1/2 p-4 w-full border border-opacity-50 mb-4 cursor-pointer"
            >
              <Link
                to={`product/${product?.id}`}
                className="block relative h-48 rounded overflow-hidden"
              >
                <img
                  src={product?.image}
                  alt={product?.title}
                  className="object-contain object-center w-full h-full block"
                />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
                  {product?.category}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {product?.title}
                </h2>
                <p className="mt-1 text-md font-semibold">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsCard;
