import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import bars from "./bars-solid.svg";
// import cross from "./rectangle-xmark-regular.svg";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [text, setText] = useState("☰");

  function toggleNav() {
    setToggleMenu(!toggleMenu);
    if (text === "☰") {
      setText("X");
    } else {
      setText("☰");
    }
  }

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    // clean up function
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="logo-section">
        <div className="misc-nav">
          <img src={logo} alt="logo" className="logo-img" />
          <h1 className="logo-heading">Pari Bhandarkar</h1>
        </div>
        <button onClick={toggleNav} className="mobile-menu-icon">
          {text}
        </button>
      </div>

      {(toggleMenu || screenWidth > 750) && (
        <>
          <div className="nav-section">
            <NavLink to="/" className="nav-actual-link">
              Work
            </NavLink>
            <NavLink to="/about" className="nav-actual-link">
              About
            </NavLink>
            <NavLink to="/contact" className="nav-actual-link">
              Contact
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
};

export default NavBar;

{
  /* <div className={isMobile ? "nav-section-mobile" : "nav-section"}> */
}
{
  /* {isMobile ? (
          <img src={bars} alt="nav-icon" />
        ) : (
          <img src={cross} alt="x-bar" />
        )} */
}
