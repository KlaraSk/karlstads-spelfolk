import axios from "axios";
import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [tunes, setTunes] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(url)
      .then((response) => response.data.tunes && setTunes([...response.data.tunes]))
      .catch((error) => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [url]);

  //   console.log(tunes);
  return { tunes, isLoading, isError };
};
