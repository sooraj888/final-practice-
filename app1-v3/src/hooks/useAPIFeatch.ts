import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

export type useAPIFeatchType = {
  data: any;
  isLoading: boolean;
  error: boolean;
};

const useAPIFeatch = (
  url: string,
  value: string | undefined
): useAPIFeatchType => {
  const [data, setData] = useState<any>("");
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLaoding] = useState<boolean>(false);

  const getData = async () => {
    try {
      setIsLaoding(true);
      const responce = await axios.get(url + value);
      if (responce?.data) {
        setData(responce?.data);
      } else {
        setError(true);
      }
    } catch (e) {
      setError(true);
    } finally {
      setIsLaoding(false);
    }
  };

  useEffect(() => {
    if (url && value) {
      getData();
    }
  }, []);

  return { data, error, isLoading };
};

export default useAPIFeatch;
