import { lazy, Suspense } from "react";
const Auth = lazy(() => import("../pages/auth"));
const Main = lazy(() => import("../pages/main"));
const Cart = lazy(() => import("../pages/cart"));
const CategoryProducts = lazy(() => import("../pages/category-products"));
const Contact = lazy(() => import("../pages/contact"));
const Home = lazy(() => import("../pages/home"));
const SignIn = lazy(() => import("../pages/sign-in"));
const SignUp = lazy(() => import("../pages/sign-up"));
const Products = lazy(() => import("../pages/products"));
const ProductDetail = lazy(() => import("../pages/product-detail"));
const NotFound = lazy(() => import("../pages/not-found"));

const routes = [
  {
    path: "/",
    exact: true,
    element: (
      <Suspense>
        <Auth />
      </Suspense>
    ),
    children: [
      {
        path: "/sign-up",
        element: (
          <Suspense>
            <SignUp />
          </Suspense>
        ),
      },
      {
        path: "/sign-in",
        element: (
          <Suspense>
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
        path: "/home",
        element: (
          <Suspense>
            <Home />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/products",
    element: (
      <Suspense>
        <Products />
      </Suspense>
    ),
  },
  {
    path: "/product/:id",
    element: (
      <Suspense>
        <ProductDetail />
      </Suspense>
    ),
  },
  {
    path: "/products/product/:id",
    element: (
      <Suspense>
        <ProductDetail />
      </Suspense>
    ),
  },
  {
    path: "/categories/:name",
    element: (
      <Suspense>
        <CategoryProducts />
      </Suspense>
    ),
  },
  {
    path: "/categories/:name/product/:id",
    element: (
      <Suspense>
        <ProductDetail />
      </Suspense>
    ),
  },
  {
    path: "/contact",
    element: (
      <Suspense>
        <Contact />
      </Suspense>
    ),
  },
  {
    path: "/cart",
    element: (
      <Suspense>
        <Cart />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense>
        <NotFound />
      </Suspense>
    ),
  },
];

export default routes;
