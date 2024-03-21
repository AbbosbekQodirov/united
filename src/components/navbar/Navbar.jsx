import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation();

  const [showMenu, setShowMenu] = useState(false);
  const [navFixed, setNavFixed] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 1) {
      setNavFixed(true);
    } else {
      setNavFixed(false);
    }
  });

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <nav className={navFixed ? "navbar fixed" : "navbar"}>
      <div className="container">
        <NavLink to={"/"}>
          <img className="logoImg" src={logo} alt="" />
        </NavLink>
        <ul className="links">
          <li>
            <NavLink to={"/"}>{t("Home")}</NavLink>
          </li>
          <li>
            <NavLink to={"/projects"}> {t("Our projects")}</NavLink>
          </li>
          <li>
            <NavLink to={"/team"}>{t("Our team")}</NavLink>
          </li>

          <button>{t("Contact us")}</button>
          <select
            onChange={changeLanguage}
            value={localStorage.getItem("i18nextLng")}
          >
            <option value="en">Eng</option>
            <option value="ru">Ru</option>
          </select>
        </ul>
        <span
          onClick={() => {
            setShowMenu(!showMenu);
          }}
          className="menu_icon"
        >
          {showMenu ? <IoMdClose /> : <HiMiniBars3BottomRight />}
        </span>
      </div>
      <ul className={showMenu ? " menu_list active" : "menu_list"}>
        <li>
          <NavLink
            onClick={() => {
              setShowMenu(false);
            }}
            to={"/"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              setShowMenu(false);
            }}
            to={"/projects"}
          >
            Our projects
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              setShowMenu(false);
            }}
            to={"/team"}
          >
            Our team
          </NavLink>
        </li>

        <button>Contact us</button>
      </ul>
    </nav>
  );
}

export default Navbar;
