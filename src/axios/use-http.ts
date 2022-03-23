import { useCallback, useState } from "react";
import axios from "axios";
import { url } from "./url";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);

    let response;
    try {
      switch (requestConfig.method) {
        case "POST":
          response = await axios.post(
            `${url}/contacts.json`,
            requestConfig.data || null
          );
          break;
        case "PUT":
          response = await axios.put(
            `${url}/contacts/${requestConfig.itemId}.json`,
            requestConfig.data || null
          );
          break;
        case "DELETE":
          response = await axios.delete(
            `${url}/contacts/${requestConfig.itemId}.json`
          );
          break;
        default:
          response = await axios.get(`${url}/contacts.json`);
      }

      setIsLoading(false);
      return applyData(response?.data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong!");
      }

      setIsLoading(false);
    }
  }, []);

  return {
    error,
    isLoading,
    sendRequest,
  };
};

export default useHttp;
