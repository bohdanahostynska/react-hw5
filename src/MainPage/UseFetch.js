import { useState, useEffect, useCallback } from "react";

function UseFetch({ data: user_name, url, getDataUrl }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const getApi = useCallback(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => setError(error.message));
  });
  useEffect(() => {
    getApi();
  }, []);
  return getDataUrl(data,user_name, error);
}
export default UseFetch;
