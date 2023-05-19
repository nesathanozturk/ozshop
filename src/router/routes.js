import Cart from "../pages/cart/Cart";
import CategoryProducts from "../pages/category-products/CategoryProducts";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import ProductDetail from "../pages/product-detail/ProductDetail";

const routes = [
  {
    path: "/",
    exact: true,
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/product/:id",
    element: <ProductDetail />,
  },
  {
    path: "/products/product/:id",
    element: <ProductDetail />,
  },
  {
    path: "/categories/:name",
    element: <CategoryProducts />,
  },
  {
    path: "/categories/:name/product/:id",
    element: <ProductDetail />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
];

export default routes;
