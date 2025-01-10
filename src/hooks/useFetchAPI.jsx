import axios from "axios";
import { useEffect, useState } from "react";

const useFetchAPI = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      /** Try to get the response from API 
       *    if not, set an error and change the loading status
       *    if ok, set data and change the loading status. */ 
     
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    // Call the function
    fetchData();
  }, [url]);

  return {data, error, loading}
};

export default useFetchAPI;
