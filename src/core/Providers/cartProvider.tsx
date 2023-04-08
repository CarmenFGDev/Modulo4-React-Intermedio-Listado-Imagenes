import React from "react";
import { CartReducer } from "../Reducers/cartReducer";

interface Props {
  children: React.ReactNode;
}

export const CartContext = React.createContext(null);
export const CartDispatchContext = React.createContext(null);

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [pets, dispatch] = React.useReducer(CartReducer, {
    cats: [],
    dogs: [],
  });

  return (
    <CartContext.Provider value={pets}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
};
export const useCart = () => {
  return React.useContext(CartContext);
};

export const useCartDispatch = () => {
  return React.useContext(CartDispatchContext);
};
