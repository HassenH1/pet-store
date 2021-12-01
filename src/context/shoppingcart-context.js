import React, { useState, createContext, useEffect } from "react";

const CartContext = createContext();

const CartProvider = (props) => {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    setTotalItems(shoppingCart.length);
  }, [shoppingCart]);

  const appendToCart = (product) => {
    setShoppingCart((prev) => [product, ...prev]);
  };

  const getItemsFromCart = () => {
    return shoppingCart;
  };

  console.log(JSON.stringify(shoppingCart, null, 2), "<=-=-=-shoppingCart");

  return (
    <CartContext.Provider
      value={{ appendToCart, getItemsFromCart, totalItems }}
      {...props}
    />
  );
};

const useCart = () => {
  const context = React.useContext(CartContext);
  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }
  return context;
};

export { CartProvider, useCart };
