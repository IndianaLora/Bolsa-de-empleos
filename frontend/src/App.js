import React, { useState } from "react";
import "./App.css";
import ReactDOM from "react-dom";
function Header(props) {
  return (
    <div className="header">
      
   
          <h2>
            Empleos <span id="R">R</span>
            <span id="D">D</span>
          </h2>
          <div>
      <header className="header-nav">
        
        <nav id="nav">
          <a href="">Inicio...</a>
          <a href="">Sobre nosotros...</a>
          <a href="">Contacto...</a>
        </nav>
      </header>
    </div>
    </div>
   
  );
}

export default Header;
