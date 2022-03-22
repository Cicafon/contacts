import { useCallback, useState } from "react";
import axios from "axios";
import { url } from "./url";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
 
    let response;
    try {
      if (!requestConfig.method || requestConfig.method === "GET") {
        response = await axios.get(`${url}/contacts.json`);
      } else if (requestConfig.method === "POST") {
        response = await axios.post((`${url}/contacts.json`), requestConfig.data || null);
      } else if (requestConfig.method === "PUT") {
        response = await axios.put((`${url}/contacts.json`), requestConfig.data || null);
      }
      else if (requestConfig.method === "DELETE") {
        response = await axios.delete(`${url}/contacts/${requestConfig.data}.json`);
      }
      setIsLoading(false);
      return applyData(response?.data);
    } catch (err: any) {
      setError(err || "Something went wrong!");
      setIsLoading(false)
    }
    
  }, []);

  return {
    error,
    isLoading,
    sendRequest,
  };
};

export default useHttp;
