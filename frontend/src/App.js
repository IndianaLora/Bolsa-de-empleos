<<<<<<< HEAD
import Busqueda from "./components/busqueda/Busqueda";
import Container from "./Container";
import Navbar from "./components/navbar/navbar";
import Cards from "./components/cards/cards";
import Login from "./components/Form/login";
import Registro from "./components/Form/registro";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <Switch>
        <Route path="/container">
          <Container />
        </Route>
        <Route path="/busqueda">
          <Busqueda />
          <div>
            <Cards />
          </div>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/registro">
          <Registro />
        </Route>
      </Switch>
    </Router>
  );
}
=======
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
>>>>>>> 79634db1e5ee97126f0fda1b42d0aa691c30e068
