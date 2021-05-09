import React, { useState, useContext, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../authentication/authentication.context";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [cart, setCart] = useState({});
  const [restaurant, setRestaurant] = useState({});

  return (
    <CartContext.Provider value={{ setRestaurant, setCart, restaurant, cart }}>
      {children}
    </CartContext.Provider>
  );
};
