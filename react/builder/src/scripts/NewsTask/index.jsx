import React from "react";
import { useStateValue } from "../GlobalStateProvider/index.jsx";
import useFetch from "../../lib/useFecth.js";

const fetchOption = { method: "GET", mode: "cors" };
const dataUrl =
  "https://gist.githubusercontent.com/crongro/6928f4707c55da24a27e366579c2288e/raw/c288f6ba05b883862c186afcb295bbdde20077ff/newsstand-news-json.js";

const NewsTask = () => {
  const [{ news }, dispatch] = useStateValue();
  const { data, loading, error } = useFetch(dataUrl, fetchOption);

  React.useEffect(() => {
    if (loading) return;
    dispatch({ type: "INIT_DATA", args: [...data] });
  }, [data]);

  if (loading) return <div>loading</div>;
  if (error) return <div>error{error}</div>;
  return <div>hi</div>;
};

export default NewsTask;
