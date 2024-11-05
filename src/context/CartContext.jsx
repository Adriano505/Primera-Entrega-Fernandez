import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

const useCart = () => {
  return useContext(CartContext);
};

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item =>
        item.id === product.id &&
        item.title === product.title &&
        item.image === product.image
      );

      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id &&
          item.title === product.title &&
          item.image === product.image
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (product) => {
    setCartItems(prevItems =>
      prevItems.filter(item =>
        !(item.id === product.id && item.title === product.title && item.image === product.image)
      )
    );
  };

  const updateQuantity = (product, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === product.id && item.title === product.title && item.image === product.image
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getTotalItems, getTotalPrice, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// Exportamos `useCart` y `CartProvider` en una sola línea para compatibilidad con Fast Refresh
export { CartProvider, useCart };
