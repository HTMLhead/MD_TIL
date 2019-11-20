import React from "react";
import useFetch from "../../lib/useFecth.js";

const fetchOption = { method: "GET", mode: "cors" };
const dataUrl =
  "https://gist.githubusercontent.com/crongro/6928f4707c55da24a27e366579c2288e/raw/c288f6ba05b883862c186afcb295bbdde20077ff/newsstand-news-json.js";
const NewsTask = () => {
  const { data, loading, error } = useFetch(dataUrl, fetchOption);

  if (loading) return loading;
  if (error) return error;
  console.log(data);
  return <div>hi</div>;
};

export default NewsTask;
