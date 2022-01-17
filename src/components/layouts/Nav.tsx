import React from "react";
import "./Nav.css";
import Logo from "../../assets/logo.svg";
import MenuIcon from "../../assets/icon-menu.svg";

const Nav = () => (
  <div className="nav">
    <img src={Logo} alt="Dept logo" />
    <div className="menu">
      <span>MENU</span>
      <img src={MenuIcon} alt="Menu icon" />
    </div>
  </div>
);

export default Nav;
