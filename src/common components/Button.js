import React from "react";
import "./Button.css";

const Button = (props) => {
  // return <button className="common-button">{props.text}</button>;
  return (
    <a href={props.link} target="_blank" rel="noreferrer">
      <button className="common-button">{props.text}</button>
    </a>
  );
};

export default Button;
