import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import ProductDetail from "./pages/product-detail/ProductDetail";
import Products from "./pages/products/Products";
import CategoryProducts from "./pages/category-products/CategoryProducts";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products" exact element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/categories/:name" element={<CategoryProducts />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
