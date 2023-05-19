import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CartContext = createContext();

function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [categories, setCategories] = useState([]);

  // Products
  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get("https://fakestoreapi.com/products", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await res.data;
      setProducts(data);
    };
    getProducts();
  }, []);

  // Categories
  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/categories",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.data;
        setCategories(data);
      } catch (e) {
        throw new Error(e, "Something went wrong");
      }
    };
    getCategories();
  }, []);

  // Product Detail
  useEffect(() => {
    const getProductDetail = async (id) => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        const data = await res.data;
        setProduct(data);
      } catch (err) {
        throw new Error(err);
      }
    };
    getProductDetail();
  }, []);

  // Product Functions
  const addProductToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existItem = cart.find((item) => item.id === product.id);
    if (existItem) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { ...product, quantity: 1 }])
      );
    }
  };

  const valueToShare = {
    products,
    product,
    categories,
    addProductToCart,
  };

  return (
    <CartContext.Provider value={valueToShare}>{children}</CartContext.Provider>
  );
}

export { Provider };
export default CartContext;
