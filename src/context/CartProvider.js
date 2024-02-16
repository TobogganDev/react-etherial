import React, { useState, useEffect } from 'react';
import CartContext from './CartContext';

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  const addToCart = (item) => {
    const updatedCartItems = [...cartItems, item];
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const emptyCart = () => {
    setCartItems([]);
    localStorage.setItem('cartItems', JSON.stringify([]));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, emptyCart }}>
      {children}
    </CartContext.Provider>
  );
}; 

export default CartProvider;