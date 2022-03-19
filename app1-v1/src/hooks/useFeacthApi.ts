import axios from "axios";
import React, { useEffect, useState } from "react";

export type useFeacthApiType = {
  data: any;
  isLoading: boolean;
  error: boolean;
};
const useFeacthApi = (
  url: string,
  value: string | undefined
): useFeacthApiType => {
  const [data, setData] = useState<any>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const featchData = async (): Promise<any> => {
    try {
      setIsLoading(true);
      const responce = await axios.get(url + value);
      if (responce.data) {
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
    if (url && value) featchData();
  }, []);
  return { data, isLoading, error };
};

export default useFeacthApi;
