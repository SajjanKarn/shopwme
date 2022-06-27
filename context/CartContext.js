import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (cart.length === 0) {
      setCart([...cart, { ...product }]);
    } else {
      cart.map((item) => {
        if (item.id !== product.id) {
          setCart([...cart, { ...product }]);
        }
      });
    }
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const increaseQuantity = (id, quantity) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: quantity };
      }
    });
    console.log(newCart);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, increaseQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
