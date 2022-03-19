import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import CountryInput from "./pages/CountryInput";
import PageNotFound from "./pages/PageNotFound";
import CountryDetailsPage from "./pages/CountryDetailsPage";

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CountryInput></CountryInput>} />

          <Route
            path="/:name"
            element={<CountryDetailsPage></CountryDetailsPage>}
          />
          <Route path="*" element={<PageNotFound></PageNotFound>} />
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
