import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";

function Navbar() {
  const [navFixed, setNavFixed] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 1) {
      setNavFixed(true);
    } else {
      setNavFixed(false);
    }
  });
  return (
    <nav className={navFixed ? "navbar fixed" : "navbar"}>
      <div className="container">
        <NavLink to={"/"}>
          <img className="logoImg" src={logo} alt="" />
        </NavLink>
        <ul className="links">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/projects"}>Our projects</NavLink>
          </li>
          <li>
            <NavLink to={"/team"}>Our team</NavLink>
          </li>
          <button>Contact us</button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
