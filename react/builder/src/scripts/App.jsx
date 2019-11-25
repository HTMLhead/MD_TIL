import React from "react";
import GlobalStateProvider from "./GlobalStateProvider/index.jsx";
import CurrentStateProvider from "./CurrentStateProvider/index.jsx";
import NewsTask from "./NewsTask/index.jsx";

const App = () => {
  return (
    <CurrentStateProvider>
      <GlobalStateProvider>
        <NewsTask />
      </GlobalStateProvider>
    </CurrentStateProvider>
  );
};

export default App;
