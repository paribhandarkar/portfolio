import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="main-about">
      <div className="about-header">
        <h1 className="main-heading">About me</h1>
        <div className="about-nav">
          <p>Navigation</p>
          <ol type="a">
            <li>
              <a href="#section" className="about-nav-links">
                about me
              </a>
            </li>
            <li>
              <a href="#section" className="about-nav-links">
                tech stack
              </a>
            </li>
            <li>
              <a href="#section" className="about-nav-links">
                muse & motivation
              </a>
            </li>
            <li>
              <a href="#section" className="about-nav-links">
                notes to self
              </a>
            </li>
            <li>
              <a href="#section" className="about-nav-links">
                maybe some day
              </a>
            </li>
          </ol>
        </div>
      </div>
      <div className="about-why-cute">
        <div></div>
        <p className="about-why-cute-dialog">
          “My prerogative is always like, first things first: it has to be cute.
          A part of what makes everything I build in computer science me is that
          it looks like me; it’s going to have my aesthetic and just kind of the
          way that I look at things. Because I know I come to computer science
          with an interesting and different perspective, everything I build is
          not going to lose its femininity because of the fact that it’s
          STEM-related.”
        </p>
      </div>
      <div className="about-design">
        <p>🤍 I believe that design starts with people.</p>
        <p>As a developer with a background in design, I aim to have a human-centered approach. If there is anything I have learned, with our power as developers who are crafting people's experiences, we cannot afford not to be human-centric. </p>
        <p>I ultimately hope to put out work positively impacting people's lives and continue to be mindful of my designs.</p>
      </div>
    </div>
  );
};

export default About;
