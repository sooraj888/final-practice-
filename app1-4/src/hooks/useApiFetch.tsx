import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { useApiFetchType } from "../components/CountryDetailsCard";

const useApiFetch = (
  url: string,
  value: string | undefined
): useApiFetchType => {
  const [data, setData] = useState<any>("");
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = async (): Promise<any> => {
    try {
      setIsLoading(true);

      const responce: AxiosResponse<any, any> = await axios.get(url + value);
      if (responce?.data) {
        setData(responce?.data);
      } else {
        setError(true);
      }
    } catch (e) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect((): void => {
    if (value && url) {
      fetchData();
    }
  }, []);
  return { data, isLoading, error };
};

export default useApiFetch;
