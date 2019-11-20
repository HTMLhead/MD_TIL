import React from "react";
import stateReducer from "./stateReducer.js";

const news = {
  company: "",
  id: "",
  logoImgUrl: "",
  newslist: [],
  thumbnews: []
};

const ContextProvider = ({ children }) => {
  const GlobalContext = React.createContext(news);

  return (
    <GlobalContext.Provider value={React.useReducer(stateReducer, news)}>
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;
