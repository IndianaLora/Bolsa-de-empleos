import React, { useState } from "react";
import "./App.css";
import ReactDOM from "react-dom";
function Header(props) {
  return (
    <div className="Header">
      <header className="App-header">
        <h1>
          <h2>Empleos <span id="R">R</span><span id="D">D</span></h2>
          <li id="nav">
            <a href="">Inicio</a>
            <a href="">Sobre nosotros</a>
            <a href="">Contacto</a>
          </li>
        </h1>
      </header>
    </div>
  );
}

export default Header;
