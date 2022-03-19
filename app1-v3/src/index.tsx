import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryInput from "./pages/CountryInput";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import PageNotFound from "./pages/PageNotFound";

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route element={<CountryInput />} path="/" />
        <Route element={<CountryDetailsPage />} path="/:name" />
        <Route element={<PageNotFound />} path="*" />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
