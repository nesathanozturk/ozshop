import { Routes, Route } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import CategoryProducts from "./pages/category-products/CategoryProducts";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import ProductDetail from "./pages/product-detail/ProductDetail";
import Products from "./pages/products/Products";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/products" exact element={<Products />} />
        <Route path="/products/product/:id" element={<ProductDetail />} />
        <Route path="/categories/:name" element={<CategoryProducts />} />
        <Route
          path="/categories/:name/product/:id"
          element={<ProductDetail />}
        />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
