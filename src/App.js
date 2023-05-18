import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
