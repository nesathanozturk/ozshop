import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

function CartProvider({ children }) {
  const [product, setProduct] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [categories, setCategories] = useState([]);
  const [carts, setCarts] = useState([]);
  const [total, setTotal] = useState(0);

  const getCategories = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.data;
      setCategories(data);
    } catch (e) {
      throw new Error(e, "Something went wrong");
    }
  };

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
    const favoriteItems = JSON.parse(localStorage.getItem("favorite"));

    if (cartItems && favoriteItems) {
      setCarts(cartItems);
      setFavorites(favoriteItems);
    }
  }, []);

  const saveCartToLocalStorage = (items) => {
    localStorage.setItem("cart", JSON.stringify(items));
  };

  const saveFavoritesToLocalStorage = (items) => {
    localStorage.setItem("favorite", JSON.stringify(items));
  };

  const addedProductAtCartNotify = () => toast("Product added to cart");

  const addedProductAtFavoritesNotify = () =>
    toast("Product added to favorites");

  const removeProductFromFavoritesNotify = () =>
    toast("Product removed from favorites");

  const removedProductFromCartNotify = () => toast("Product removed from cart");

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
      saveCartToLocalStorage(carts);
    } else {
      setCarts([...carts, { ...product, quantity: 1 }]);
      saveCartToLocalStorage(carts);
      addedProductAtCartNotify();
    }
  };

  const removeProduct = (id) => {
    const updatedCart = carts.filter((item) => item.id !== id);
    setCarts(updatedCart);
    saveCartToLocalStorage(updatedCart);
    removedProductFromCartNotify();
  };

  const clearCart = () => {
    const updatedCart = carts.filter((item) => item.id && !item.id);
    setCarts(updatedCart);
    saveCartToLocalStorage(updatedCart);

    if (carts.length > 0) {
      clearCartNotify();
    }
  };

  const addProductToFavorites = (product) => {
    const existItem = favorites.find((item) => item.id === product.id);

    if (existItem) {
      alert("This product already exists in your favorites!");
      return;
    } else {
      const updatedFavorites = [...favorites, product];
      setFavorites(updatedFavorites);
      saveFavoritesToLocalStorage(updatedFavorites);
      addedProductAtFavoritesNotify();
    }
  };

  const removeProductAtFavorites = (id) => {
    const updatedFavorites = favorites.filter((item) => item.id !== id);
    setFavorites(updatedFavorites);
    saveFavoritesToLocalStorage(updatedFavorites);
    removeProductFromFavoritesNotify();
  };

  const handleChangeAmount = (product, d) => {
    const i = carts.indexOf(product);
    carts[i].quantity += d;

    if (carts[i].quantity === 0) carts[i].quantity = 1;
    setCarts([...carts]);
    saveCartToLocalStorage([...carts]);
  };

  const handleProductPrice = () => {
    let productPrice = 0;

    carts.map((product) => (productPrice += product.price * product.quantity));
    setTotal(productPrice);
  };

  const valueToShare = {
    product,
    categories,
    getCategories,
    favorites,
    getProductDetail,
    addProductToCart,
    addProductToFavorites,
    removeProductAtFavorites,
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

export { CartProvider };
export default CartContext;
