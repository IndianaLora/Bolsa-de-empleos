import React from "react";
import ReactDOM from "react-dom";
import "./Header.css";
import "./busqueda.css";
import Navbar from "./components/navbar/navbar";
import Container from "./pages/Container";
import Busqueda from "./Busqueda";
import reportWebVitals from "./components/reportWebVitals";

ReactDOM.render(
  <div>
    <Navbar />
  </div>,
  document.getElementById("header")
);
ReactDOM.render(
  <div>
    <React.StrictMode>
      <Busqueda />
    </React.StrictMode>
  </div>,
  document.getElementById("root")
);

reportWebVitals();
