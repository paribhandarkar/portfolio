import React from "react";
import contactHeading from "./sayhi.svg";
import "./Contact.css";
import Button from "../common components/Button";
import BriefFooter from "../common components/BriefFooter";

const Contact = () => {
  return (
    <>
      <div>
        <div className="contact-heading">
          <img src={contactHeading} alt="sayhi" />
          <p>
            Don't worry I hate forms too! Just shoot me an email at
            bhandarkarpari@gmail.com and I'll be in touch ASAP!
          </p>
          <Button text="Send email" link="mailto: bhandarkarpari@gmail.com" />
        </div>
      </div>
      <BriefFooter />
    </>
  );
};

export default Contact;
