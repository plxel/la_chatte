import { useContext, useCallback } from "react";
import { AppContext } from "./AppContext";

export const useAppContext = () => {
  const [state, setState] = useContext(AppContext);

  const addItemToCart = useCallback(
    (item) => {
      setState((prevState) => ({
        ...prevState,
        cart: [...prevState.cart, item],
      }));
    },
    [state.cart]
  );

  return {
    cart: state.cart,
    addItemToCart,
  };
};
