import React from "react";
import GlobalStateProvider from "./GlobalStateProvider/index.jsx";
import NewsTask from "./NewsTask/index.jsx";

const App = () => {
  return (
    <GlobalStateProvider>
      <NewsTask />
    </GlobalStateProvider>
  );
};

export default App;
