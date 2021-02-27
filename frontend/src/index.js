import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import "./components/busqueda/busqueda.css";
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
