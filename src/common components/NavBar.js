import React, { useState } from "react";
import logo from "./logo.svg";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import bars from "./bars-solid.svg";
import cross from "./rectangle-xmark-regular.svg";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className="navbar">
      <div className="logo-section">
        <img src={logo} alt="logo" className="logo-img" />
        <h1 className="logo-heading">Pari Bhandarkar</h1>
      </div>
      {/* <div className="nav-section"> */}
      <div className={isMobile ? "nav-section-mobile" : "nav-section"}>
        <NavLink to="/">Work</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <button className="mobile-menu-icon">
        {isMobile ? (
          <img src={bars} alt="nav-icon" />
        ) : (
          <img src={cross} alt="x-bar" />
        )}
      </button>
    </div>
  );
};

export default NavBar;
