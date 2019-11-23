import React from "react";
import { useStateValue } from "../GlobalStateProvider/index.jsx";
import useFetch from "../../lib/useFecth.js";
import Navigator from "./Navigator/index.jsx";
import Content from "./Content/index.jsx";

const NewsTask = () => {
  return (
    <>
      <Navigator />
      <Content />
    </>
  );
};

export default NewsTask;
