import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItem")) || []
  );

  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (product) => {
    const isProductExist = cartItems.find((item) => item.id === product.id);
    if (isProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (product) => {
    const isProductExist = cartItems.find((item) => item.id === product.id);

    if (isProductExist.quantity > 1) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } else {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
  };

    const cancelOrder = (id) => {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
      alert("Cancel Order!");
    };

    const checkOut = () => {
      alert("Thanks for Order");
      setCartItems([]);
    }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        handleAddToCart,
        handleRemoveFromCart,
        cancelOrder,
        checkOut
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
