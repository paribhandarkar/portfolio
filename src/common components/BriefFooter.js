import React from "react";
import "./BriefFooter.css";
import gmail from "../work/stickers/gmail.svg";
import linkedin from "../work/stickers/linkedin.svg";
import twitter from "../work/stickers/twitter.svg";
import github from "../work/stickers/github.svg";
import insta from "../work/stickers/instagram.svg";

const BriefFooter = () => {
  return (
    <div className="brief-footer">
      <hr className="link-line" />
      <div className="links">
        <a href="mailto: bhandarkarpari@gmail.com">
          <img src={gmail} alt="gmail" className="link" />
        </a>
        <a
          href="https://www.linkedin.com/in/paribhandarkar"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="linkedin" className="link" />
        </a>
        <a
          href="https://twitter.com/parisbhandarkar?t=nDvb9UhvoooYn_BRHrm_gQ&s=08"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="twitter" className="link" />
        </a>
        <a
          href="https://github.com/paribhandarkar"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="github" className="link" />
        </a>
        <a
          href="https://www.instagram.com/paribhandarkar/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={insta} alt="instagram" className="link" />
        </a>
      </div>
      <div className="last-line">
        <p>This is all there is. Were you expecting more? It's okay, me too.</p>
      </div>
    </div>
  );
};

export default BriefFooter;
