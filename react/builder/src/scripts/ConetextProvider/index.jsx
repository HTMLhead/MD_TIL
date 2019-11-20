import React from "react";
import stateReducer from "./stateReducer.js";

const news = {
  company: "",
  id: "",
  logoImgUrl: "",
  newslist: [],
  thumbnews: {}
};

const ContextProvider = ({ children }) => {
  const Context = React.createContext(news);

  return (
    <Context.Provider value={useReducer(stateReducer, GlobalState)}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
