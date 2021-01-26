import React, { useState } from "react";
import "./App.css";
import ReactDOM from "react-dom";
function Header(props) {
  return (
    <div className="Header">
      <header className="App-header">
        <h1>
          Empleos
          <span id="r">R</span>
          <span id="d">D</span>
        </h1>
      </header>
    </div>
  );
}

export default Header;
