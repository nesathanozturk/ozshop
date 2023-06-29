import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async (name) => {
      try {
        const res = await axios.get(url);
        const data = await res?.data;
        setApiData(data);
      } catch (e) {
        throw new Error(e, "Something went wrong");
      }
    };
    fetchData();
  }, [url]);

  return { apiData };
};

export default useFetch;
