import React, { createContext, useReducer } from "react";

function cartReducer(state, action) {
    switch (action.type) {
      case "ADD_ITEM":
        return { ...state, items: [...state.items, action.payload].sort() };
      case "REMOVE_ITEM":
        return {
          ...state,
          items: state.items
            .filter(
              (_, i) =>
                i !== state.items.findIndex((item) => item === action.payload)
            )
            .sort(),
        };
      case "CLEAR_CART":
        return { ...state, items: [] };
      default:
        return state;
    }
  }

  const initialState = {
    items: ["Laptop", "Mobile"],
  }

  const CartContext = createContext(null);

  export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, initialState);


    const addItem = (item) => {
        dispatch({ type: "ADD_ITEM", payload: item });
    }

    const removeItem = (item) => {
        dispatch({ type: "REMOVE_ITEM", payload: item });
    }

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" });
    }
    

    const value = {
        items: state.items,
        addItem,
        removeItem,
        clearCart,
    }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;

  }

  export function useCart() {
    return useContext(CartContext);
  }