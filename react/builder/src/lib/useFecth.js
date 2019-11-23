import React from "react";

const useFetch = (url, opt) => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, opt);
        const json = await res.json();
        setLoading(false);
        setData(json);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
    () => {};
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
