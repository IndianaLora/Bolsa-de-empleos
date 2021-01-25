import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./App";
import Forms from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
  document.getElementById("header")
);

reportWebVitals();
