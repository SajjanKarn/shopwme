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

  const removeFromCart = (id) => {};

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
