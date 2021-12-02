import React, { useState, createContext, useEffect } from "react";

const CartContext = createContext();

const CartProvider = (props) => {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    if (shoppingCart !== null) setTotalItems(shoppingCart.length);
  }, [shoppingCart]);

  const appendToCart = (product) => {
    setShoppingCart((prev) => [product, ...prev]);
  };

  const getItemsFromCart = () => {
    return shoppingCart || [];
  };

  const removeItemFromCart = (item) => {
    setShoppingCart((prev) => {
      let newVal = prev.filter((prod) => prod.id !== item.id);
      return [...newVal];
    });
  };

  useEffect(() => {
    if (shoppingCart !== null && shoppingCart.length !== 0) {
      sessionStorage.setItem("cart", JSON.stringify(shoppingCart));
    }
  }, [shoppingCart]);

  useEffect(() => {
    let products = sessionStorage.getItem("cart");
    console.log(JSON.parse(products), "<=-=-=-what is this from session?");
    setShoppingCart(JSON.parse(products));
  }, []);

  return (
    <CartContext.Provider
      value={{
        appendToCart,
        getItemsFromCart,
        totalItems,
        removeItemFromCart,
        shoppingCart,
      }}
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
