import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./App";
import Container from "./container";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <div>
    <Header />
  </div>,
  document.getElementById("header")
);
ReactDOM.render(
  <div>
    <React.StrictMode>
      <Container />
    </React.StrictMode>
  </div>,
  document.getElementById("root")
);

reportWebVitals();
