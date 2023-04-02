import React from "react";
import logo from "./logo.svg";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo-section">
        <img src={logo} alt="logo" className="logo-img" />
        <h1 className="logo-heading">Pari Bhandarkar</h1>
      </div>
      <div className="nav-section">
        {/* <a className="squiggle" href="#section">Work</a>
        <a href="#section">About</a>
        <a href="#section">Contact</a> */}
        <NavLink to="/" >Work</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
