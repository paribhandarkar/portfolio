import React from "react";
import "./Details.css";
import Button from "../../common components/Button";

const Details = (props) => {
  return (
    <details className="main-details">
      <summary className="project-summary">{props.summary}</summary>
      <h2 className="descriptionHeading">{props.descriptionHeading}</h2>
      <p className="description-mini-project">{props.description}</p>
      <h2 className="newHeading">{props.newHeading}</h2>
      <p className="newDescription">{props.newDescription}</p>
      <h2 className="challengesHeading">{props.challengesHeading}</h2>
      <p className="challengesDescription">{props.challengesDescription}</p>
      <div className="button-zone">
        <Button text="Source Code" link={props.linkSource} />
        <Button text="Live Preview" link={props.linkLive} />
      </div>
    </details>
  );
};

export default Details;
