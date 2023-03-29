import React from "react";
import logo from './logo.svg'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo-section">
        <img src={logo} alt="logo" />
        <h1>Pari Bhandarkar</h1>
      </div>
      <div className="nav-section">
        <a className="squiggle" href="#section">Work</a>
        <a href="#section">About</a>
        <a href="#section">Contact</a>
      </div>
    </div>
  );
};

export default NavBar;
