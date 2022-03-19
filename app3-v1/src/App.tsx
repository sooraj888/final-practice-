import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import PostListPage from "./pages/PostListPage";
import RawJson from "./pages/RawJson";
import PageNotFound from "./pages/PageNotFound";
import axios from "axios";

export type postDataType = Array<Array<any>>;

function App(): JSX.Element {
  const [postData, setPostData] = useState<postDataType>([]);

  const [page, setPage] = useState<number>(1);

  let count: number = 0;

  let myInterval: NodeJS.Timer;

  const fetchData = async (): Promise<any> => {
    const responce: any = await axios.get(
      `http://hn.algolia.com/api/v1/search?query=bar&page=${count}`
    );
    console.log(responce);
    if (!responce?.data?.exhaustiveNbHits) {
      setPostData((prev: postDataType): postDataType => {
        let updatedArr: postDataType = [...prev];
        updatedArr = [...updatedArr, responce?.data?.hits];
        return updatedArr;
      });
      count += 1;
    } else {
      clearInterval(myInterval);
    }
  };

  useEffect((): void => {
    fetchData();
    myInterval = setInterval(fetchData, 3000);
  }, []);

  useEffect((): void => {
    console.log(postData);
  }, [postData]);

  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PostListPage
                postData={postData}
                page={page}
                setPage={setPage}
              ></PostListPage>
            }
          />
          <Route path="/rawJson" element={<RawJson />}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
