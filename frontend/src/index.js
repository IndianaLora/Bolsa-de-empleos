import React from "react";
import ReactDOM from "react-dom";
import { Pagination } from "antd";
import "antd/dist/antd.css";
import "./App.css";
import App from "./App";
import { BrowserRouter as Router, BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <div>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>,

  document.getElementById("root")
);
