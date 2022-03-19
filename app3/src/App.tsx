import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import PageNotFound from "./pages/PageNotFound";
import RawJson from "./pages/RawJson";
import PostList from "./components/PostList";

function App() {
  const [page, setPage] = useState<number>(1);
  const [postData, setPostData] = useState<any>([]);
  let interval: any;
  let count = 0;

  const fetchData = async () => {
    const responce = await axios.get(
      `http://hn.algolia.com/api/v1/search?query=bar&page=${count}`
    );
    if (responce.data) {
      count = 1 + count;
      setPostData((prev: any) => {
        const updateArr = [...prev];
        updateArr.push(responce?.data?.hits);
        return updateArr;
      });
      console.log(responce.data.exhaustiveNbHits);
      if (responce?.data?.exhaustiveNbHits) {
        clearInterval(interval);
      }
    }
  };
  useEffect(() => {
    fetchData();
    interval = setInterval(fetchData, 10000);
  }, []);

  useEffect(() => {
    console.log(postData);
  }, [postData]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <PostList
                postData={postData}
                setPage={setPage}
                page={page}
              ></PostList>
            }
            path="/"
          ></Route>
          <Route element={<RawJson></RawJson>} path="/rawData" />
          <Route path="*" element={<PageNotFound></PageNotFound>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
