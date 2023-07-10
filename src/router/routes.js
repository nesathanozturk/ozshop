import { lazy, Suspense } from "react";
import Loading from "../components/loading";
const Auth = lazy(() => import("../pages/auth"));
const Main = lazy(() => import("../pages/main"));
const Cart = lazy(() => import("../pages/cart"));
const CategoryProducts = lazy(() => import("../pages/category-products"));
const Contact = lazy(() => import("../pages/contact"));
const Favorites = lazy(() => import("../pages/favorites"));
const FavoriteProductDetail = lazy(() =>
  import("../pages/favorite-product-detail")
);
const NotFound = lazy(() => import("../pages/not-found"));
const Home = lazy(() => import("../pages/home"));
const SignIn = lazy(() => import("../pages/sign-in"));
const SignUp = lazy(() => import("../pages/sign-up"));
const Products = lazy(() => import("../pages/products"));
const ProductDetail = lazy(() => import("../pages/product-detail"));

const routes = [
  {
    path: "/",
    element: (
      <Suspense>
        <Auth />
      </Suspense>
    ),
    children: [
      {
        path: "sign-up",
        element: (
          <Suspense fallback={<Loading />}>
            <SignUp />
          </Suspense>
        ),
      },
      {
        path: "sign-in",
        element: (
          <Suspense fallback={<Loading />}>
            <SignIn />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/",
    element: (
      <Suspense>
        <Main />
      </Suspense>
    ),
    children: [
      {
        path: "",
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "products",
        element: (
          <Suspense fallback={<Loading />}>
            <Products />
          </Suspense>
        ),
      },
      {
        path: "product/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <ProductDetail />
          </Suspense>
        ),
      },
      {
        path: "products/product/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <ProductDetail />
          </Suspense>
        ),
      },
      {
        path: "favorites",
        element: (
          <Suspense fallback={<Loading />}>
            <Favorites />
          </Suspense>
        ),
      },
      {
        path: "favorites/favorite/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <FavoriteProductDetail />
          </Suspense>
        ),
      },
      {
        path: "categories/:name",
        element: (
          <Suspense fallback={<Loading />}>
            <CategoryProducts />
          </Suspense>
        ),
      },
      {
        path: "categories/:name/product/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <ProductDetail />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<Loading />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<Loading />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<Loading />}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
];

export default routes;
