import { useState, useEffect } from "react";

// useState, useEffect implemented in this hook

const useFetch = (url, options) => {
  const [payload, setPayload] = useState({
    loading: false,
    data: null,
    error: null,
  });

  const getData = (url, option) => {
    setPayload({ loading: true });
    fetch(url, option)
      .then((res) => res.json())
      .then((res) => {
        setPayload({ loading: false, data: res });
      })
      .catch((error) => {
        setPayload({ loading: false, error });
      });
  };

  useEffect(() => {
    if (url) {
      getData(url, options);
      console.log("Fetched data");
    }
  }, [url, options]);
  return {
    ...payload,
    getData,
  };
};

export default useFetch;
