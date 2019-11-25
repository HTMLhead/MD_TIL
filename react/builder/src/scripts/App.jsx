import React from "react";
import GlobalStateProvider from "./GlobalStateProvider/index.jsx";
import CurrentStateProvider from "./CurrentStateProvider/index.jsx";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import NewsTask from "./NewsTask/index.jsx";

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    font-size: 10px;
    font-family: 'NanumBarunGothic', sans-serif;
  }
`;
const App = () => {
  return (
    <CurrentStateProvider>
      <GlobalStateProvider>
        <GlobalStyle />
        <NewsTask />
      </GlobalStateProvider>
    </CurrentStateProvider>
  );
};

export default App;
