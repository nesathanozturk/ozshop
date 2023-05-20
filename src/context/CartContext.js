import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

function Provider({ children }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [categories, setCategories] = useState([]);
  const [carts, setCarts] = useState([]);
  const [total, setTotal] = useState(0);

  // Get Products
  const getProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products?limit=7", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await res.data;
      setProducts(data);
    } catch (e) {
      throw new Error(e, "Something went wrong");
    }
  };

  // Get All Products
  const getAllProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await res.data;
      setProducts(data);
    } catch (e) {
      throw new Error(e, "Something went wrong");
    }
  };

  // Categories
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

  // Category Products
  const getCategory = async (name) => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/category/${name}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.data;
      setProducts(data);
    } catch (e) {
      throw new Error(e, "Something went wrong");
    }
  };

  // Product Detail
  const getProductDetail = async (id) => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      const data = await res.data;
      setProduct(data);
    } catch (e) {
      throw new Error(e, "Something went wrong");
    }
  };

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart"));

    if (cartItems) {
      setCarts(cartItems);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("cart", JSON.stringify(items));
  };

  const addedProductAtCartNotify = () => toast("Product added to cart");

  const removedProductAtCartNotify = () => toast("Product removed from cart");

  const clearCartNotify = () => toast("You have cleared your cart");

  const addProductToCart = (product) => {
    const existItem = carts.find((item) => item.id === product.id);

    if (existItem) {
      setCarts(
        carts.map((item) =>
          item.id === product.id
            ? { ...existItem, quantity: existItem.quantity + 1 }
            : item
        )
      );
      saveToLocalStorage(carts);
    } else {
      setCarts([...carts, { ...product, quantity: 1 }]);
      saveToLocalStorage(carts);
    }
    addedProductAtCartNotify();
  };

  const removeProduct = (id) => {
    const updatedCart = carts.filter((item) => item.id !== id);
    setCarts(updatedCart);
    saveToLocalStorage(updatedCart);
    removedProductAtCartNotify();
  };

  const clearCart = () => {
    const updatedCart = carts.filter((item) => item.id && !item.id);
    setCarts(updatedCart);
    saveToLocalStorage(updatedCart);

    if (carts.length > 0) {
      clearCartNotify();
    }
  };

  const handleChangeAmount = (product, d) => {
    const i = carts.indexOf(product);
    carts[i].quantity += d;

    if (carts[i].quantity === 0) carts[i].quantity = 1;
    setCarts([...carts]);
    saveToLocalStorage([...carts]);
  };

  const handleProductPrice = () => {
    let productPrice = 0;

    carts.map((product) => (productPrice += product.price * product.quantity));
    setTotal(productPrice);
  };

  const valueToShare = {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    products,
    product,
    categories,
    getAllProducts,
    getProducts,
    getCategories,
    getCategory,
    getProductDetail,
    addProductToCart,
    carts,
    total,
    setTotal,
    removeProduct,
    clearCart,
    handleChangeAmount,
    handleProductPrice,
  };

  return (
    <CartContext.Provider value={valueToShare}>{children}</CartContext.Provider>
  );
}

export { Provider };
export default CartContext;
