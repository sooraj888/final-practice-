import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import NavBar from "./components/NabBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserInputPage from "./pages/UserInputPage";
import Result from "./pages/Result";
import Question from "./pages/Question";
import PageNotFound from "./pages/PageNotFound";
ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserInputPage />} />
        <Route path="/result" element={<Result />} />

        <Route path="/question/:id" element={<Question />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
