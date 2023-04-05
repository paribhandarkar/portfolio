import React from "react";
import "./ProjectOverview.css";
import staple from "./images/staple.svg";
import portfolio from "./images/portfolio.svg";
import { NavLink } from "react-router-dom";

const ProjectOverview = () => {
  return (
    <div className="project-overview-section">
      <h2 className="proud-project-heading">Projects that I’m proud of</h2>
      <div className="staple-section">
        <img src={staple} alt="staple screen shot" className="staple-image" />
        <div className="staple-overview-content">
          <h4 className="staple-overview-heading" id="staple-overview-heading">
            A web based portal for farmers ‐ Staple
          </h4>
          <p className="staple-overview-para">
            With its focus on promoting the medicinal varieties of rice and
            connecting farmers with expert opinions, Staple represents an
            innovative and impactful approach to promoting sustainable and
            healthy rice farming practices.
          </p>
          <div className="overview-button-section">
            <a
              href="https://github.com/paribhandarkar/portfolio"
              target="_blank"
              rel="noreferrer"
            >
              <button
                className="overview-button primary"
                id="staple-button-source"
              >
                Source Code
              </button>
            </a>
            <a
              href="https://github.com/paribhandarkar/portfolio"
              target="_blank"
              rel="noreferrer"
            >
              <button
                className="overview-button secondary"
                id="staple-button-code"
              >
                Code Journey
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="portfolio-section">
        <img
          src={portfolio}
          alt="staple screen shot"
          className="staple-image"
        />
        <div className="staple-overview-content">
          <h4
            className="staple-overview-heading"
            id="portfolio-overview-heading"
          >
            Personal Portfolio
          </h4>
          <p className="staple-overview-para">
            My portfolio project is a reflection of my creativity, technical
            skill, and unique perspective as a front end developer. I've
            designed every aspect of the website, from the user interface to the
            code, with my personal aesthetic and approach to web development in
            mind.
          </p>
          <div className="overview-button-section">
            <a
              href="https://github.com/paribhandarkar/portfolio"
              target="_blank"
              rel="noreferrer"
            >
              <button
                className="overview-button primary"
                id="portfolio-button-source"
              >
                Source Code
              </button>
            </a>
            <button
              className="overview-button secondary"
              id="portfolio-button-code"
            >
              Code Journey
            </button>
          </div>
        </div>
      </div>
      <h4 className="loved-project-heading">
        <NavLink to="/mini-projects" >
          Projects that still deserve love →
        </NavLink>
      </h4>
    </div>
  );
};

export default ProjectOverview;
