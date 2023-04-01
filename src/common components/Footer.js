import React from "react";
import "./Footer.css";
import star from "../work/stickers/export-star.svg";
import Button from "./Button";
import gmail from "../work/stickers/gmail.svg";
import linkedin from "../work/stickers/linkedin.svg";
import twitter from "../work/stickers/twitter.svg";
import github from "../work/stickers/github.svg";
import insta from "../work/stickers/instagram.svg";

const Footer = () => {
  const lineone = document.querySelector(".hire-me");

  window.onscroll = () => {
    let pos = window.scrollY - 600;
    lineone.style.left = `${pos}px`;
  };

  return (
    <>
      <div className="hire-me-scroll">
        <h5 className="hire-me">
          Hire me <img src={star} alt="hire me" className="hire-me-star" /> Hire
          me <img src={star} alt="hire me" className="hire-me-star" /> Hire me
          <img src={star} alt="hire me" className="hire-me-star" />
          Hire me
          <img src={star} alt="hire me" className="hire-me-star" />
          Hire me
          <img src={star} alt="hire me" className="hire-me-star" />
          Hire me
          <img src={star} alt="hire me" className="hire-me-star" />
          Hire me
          <img src={star} alt="hire me" className="hire-me-star" />
          Hire me
          <img src={star} alt="hire me" className="hire-me-star" />
          Hire me
          <img src={star} alt="hire me" className="hire-me-star" />
          Hire me
          <img src={star} alt="hire me" className="hire-me-star" />
          Hire me
        </h5>
      </div>

      <div className="contact-section">
        <div className="contact-one">
          <h6 className="contact-line">
            Didn’t your mother tell you that networking was good for you?
          </h6>
          <div className="social-links">
            <a href="mailto: bhandarkarpari@gmail.com">
              <img src={gmail} alt="gmail" className="icon-link" />
            </a>
            <a
              href="https://www.linkedin.com/in/paribhandarkar"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="linkedin" className="icon-link" />
            </a>
            <a
              href="https://twitter.com/parisbhandarkar?t=nDvb9UhvoooYn_BRHrm_gQ&s=08"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitter} alt="twitter" className="icon-link" />
            </a>
            <a
              href="https://github.com/paribhandarkar"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="github" className="icon-link" />
            </a>
            <a
              href="https://www.instagram.com/paribhandarkar/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={insta} alt="instagram" className="icon-link" />
            </a>
          </div>
        </div>
        <Button text="Let's talk" />
      </div>

      <div className="last-line">
        <p>This is all there is. Were you expecting more? It's okay, me too.</p>
      </div>
    </>
  );
};

export default Footer;
