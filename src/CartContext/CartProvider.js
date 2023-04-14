// CartProvider.js
import React, { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // const addToCart = (item) => {
  //   setCart([...cart, item]);
  // };

  const addToCart = (item) => {
    // Check if the item already exists in the cart
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      // If item already exists, update the quantity
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCart(updatedCart);
    } else {
      // If item does not exist, add it with quantity 1
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };


  const removeFromCart = (itemToRemove) => {
    setCart(cart.filter((item) => item.id !== itemToRemove.id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const incrementItem = (itemToIncrement) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemToIncrement.id) {
        return {
          ...item,
          quantity: item.quantity + 1
        };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const decrementItem = (itemToDecrement) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemToDecrement.id) {
        return {
          ...item,
          quantity: item.quantity - 1
        };
      }
      return item;
    });
    setCart(updatedCart);
  };


  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        incrementItem,
        decrementItem,
        total: calculateTotal() 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
