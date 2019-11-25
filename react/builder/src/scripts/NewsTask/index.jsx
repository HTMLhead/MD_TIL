import React from "react";
import { useCurrentState } from "../CurrentStateProvider/index.jsx";
import useFetch from "../../lib/useFecth.js";
import Navigator from "./Navigator/index.jsx";
import Content from "./Content/index.jsx";

const fetchOption = { method: "GET", mode: "cors" };
const dataUrl =
  "https://gist.githubusercontent.com/crongro/6928f4707c55da24a27e366579c2288e/raw/c288f6ba05b883862c186afcb295bbdde20077ff/newsstand-news-json.js";

const NewsTask = () => {
  const { data, loading, error } = useFetch(dataUrl, fetchOption);
  const [, dispatch] = useCurrentState();

  React.useEffect(() => {
    if (loading) return;
    dispatch({ type: "INIT_DATA", args: data });
    dispatch({ type: "CURRENT_NEWS", args: "SBS" });
  }, [data]);

  if (loading) return <div>로딩...</div>;
  if (error) return <div>{error}</div>;
  return (
    <>
      <Navigator />
      <Content />
    </>
  );
};

export default NewsTask;
