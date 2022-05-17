import { useCallback, useEffect, useState } from "react";
import { apiService } from "../services/api";

export function useFetch({ url }) {
  const [data, setData] = useState();

  const fetch = useCallback(async () => {
    const response = await apiService.get(url);
    console.log("response", response.data)
    setData(response.data);
  }, [url]);

  useEffect(() => {
    fetch();
  }, [fetch, url]);

  return { data, fetch };
}