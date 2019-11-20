import React from "react";
import ContextProvider from "./ContextProvider/index.jsx";
import NewsTask from "./NewsTask/index.jsx";

const App = () => {
  return (
    <ContextProvider>
      <NewsTask />
    </ContextProvider>
  );
};

export default App;
