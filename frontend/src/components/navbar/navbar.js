import React, { useState } from "react";
import "./navbar.css";
import { FaBullhorn, FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { sidebarData } from "./sideBar";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div>
      <div className="navbar">
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <a className="navbar-brand" href="#">
              <Link className="menu-bars">
                <FaBullhorn />
              </Link>
              Empleos <strong id="red">R</strong>
              <strong id="blue">D</strong>
            </a>
            {sidebarData.map((item, index) => {
              return (
                <li key={index} className={item.className}>
                  <Link to={item.path}>
                    <span>{item.tittle}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Navbar;
