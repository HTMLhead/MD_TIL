import React from "react";
import stateReducer from "./stateReducer.js";

const CurrentContext = React.createContext();

const initalData = {
  ALL_DATA: [],
  id: "",
  company: "",
  logoImgUrl: "",
  newslist: [],
  thumbnews: {
    imageUrl: "",
    text: ""
  }
};

const CurrentStateProvider = ({ children }) => {
  return (
    <CurrentContext.Provider value={React.useReducer(stateReducer, initalData)}>
      {children}
    </CurrentContext.Provider>
  );
};

export const useCurrentState = () => React.useContext(CurrentContext);

export default CurrentStateProvider;
