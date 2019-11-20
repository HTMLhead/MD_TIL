import React from "react";
import stateReducer from "./stateReducer.js";

const GlobalContext = React.createContext();

const initalData = {
  news: []
};

const GlobalStateProvider = ({ children }) => {
  return (
    <GlobalContext.Provider value={React.useReducer(stateReducer, initalData)}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useStateValue = () => React.useContext(GlobalContext);

export default GlobalStateProvider;
