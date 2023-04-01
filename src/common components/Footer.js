import React from "react";
import "./Footer.css";
import star from "../work/stickers/export-star.svg";

const Footer = () => {
  const lineone = document.querySelector(".hire-me");

  window.onscroll = () => {
    let pos = window.scrollY - 200;
    lineone.style.left = `${pos}px`;
  };

  return (
    <div className="hire-me-scroll">
      <h5 className="hire-me">
        Hire me <img src={star} alt="hire me" className="hire-me-star" /> Hire me <img src={star} alt="hire me" className="hire-me-star" /> Hire me
        <img src={star} alt="hire me" className="hire-me-star" />Hire me
        <img src={star} alt="hire me" className="hire-me-star" />Hire me
        <img src={star} alt="hire me" className="hire-me-star" />Hire me
        <img src={star} alt="hire me" className="hire-me-star" />Hire me
        <img src={star} alt="hire me" className="hire-me-star" />Hire me
      </h5>
    </div>
  );
};

export default Footer;
