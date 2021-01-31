import React from "react";
import "./navbar.css";
import { Anchor } from "anchor";

const Link = Anchor;
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Empleos <strong id="red">R</strong>
            <strong id="blue">D</strong>
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="itemsnav" className="nav-item">
                <a
                  className="nav-link "
                  aria-curren="page"
                  href="C:\Users\indiana\Documents\code\BolsaEmpleos\frontend\src\Container.js"
                >
                  Inicio
                </a>
              </li>
              <li className="itemsnav" className="nav-item">
                <a className="nav-link lg" href="#container">
                  Sobre Nosotros
                </a>
              </li>
              <li className="itemsnav" className="nav-item">
                <a className="nav-link" href="#">
                  Contacto
                </a>
              </li>
              <button className="btn1" className="btn btn-outline-primary">
                Publica Gratis
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
