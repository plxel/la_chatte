import React, { useState } from "react";

const AppContext = React.createContext([{}, () => {}]);

const initialState = {
  cart: [],
}

const AppContextProvider = (props) => {
  const [state, setState] = useState(initialState);

  return (
    <AppContext.Provider value={[state, setState]}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
