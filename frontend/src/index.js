import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import "./components/busqueda/busqueda.css";
import Navbar from "./components/navbar/navbar";
import App from "./App";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";

ReactDOM.render(
  <div>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </div>,

  document.getElementById("root")
);
