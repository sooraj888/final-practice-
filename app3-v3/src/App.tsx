import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios, { AxiosResponse } from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostList from "./pages/PostList";
import RawJson from "./pages/RawJson";
import PageNotFound from "./pages/PageNotFound";
import NavBar from "./Componets/NavBar";

function App(): JSX.Element {
  const [data, setData] = useState<any[]>([]);
  let count: number = 0;
  const [page, setPage] = useState<number>(1);
  let intervel: NodeJS.Timer;

  const [error, setError] = useState<boolean>(false);
  const url: string = "https://hn.algolia.com/api/v1/search?query=bar&page=";

  const fetchData = async (): Promise<any> => {
    try {
      setError(false);
      const responce: AxiosResponse<any, any> = await axios.get(url + count);
      if (!responce?.data?.exhaustiveNbHits) {
        setData((prev): any[] => [...prev, responce?.data?.hits]);
        count += 1;
      } else {
        clearInterval(intervel);
      }
    } catch (e) {
      setError(true);
    } finally {
    }
  };

  useEffect((): void => {
    fetchData();
    intervel = setInterval(fetchData, 10000);
  }, []);
  useEffect((): void => {
    console.log(data);
  }, [data]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PostList
                setPage={setPage}
                data={data}
                page={page}
                error={error}
              />
            }
          />
          <Route path="/rawJson" element={<RawJson />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

//         ` http://hn.algolia.com/api/v1/search?query=bar&page=${count}
