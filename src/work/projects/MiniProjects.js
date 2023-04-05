import React from "react";
import Details from "./Details";
import MiniProjectsData from "./MiniProjectsData";
import "./MiniProject.css";
import BriefFooter from "../../common components/BriefFooter";

const MiniProjects = () => {
  return (
    <>
      <div id="mini-projects-section">
        <div className="mini-projects-intro">
          <h4>JavaScript Mastery: A Collection of 25+ Web Projects</h4>
          <p>
            I am proud to have created a diverse range of 50 unique projects
            using HTML, CSS, and JavaScript. Through this journey, I have
            developed my skills and honed my craft as a front-end developer.
          </p>
          <p>
            Each project provided a new challenge, allowing me to learn new
            techniques, experiment with different design patterns, and expand my
            creativity. I tackled each project with enthusiasm and a willingness
            to learn, whether it was building a basic calculator or a complex
            web application.
          </p>
          <p>
            My portfolio of 50 projects demonstrates my passion for web
            development and my commitment to growing as a front-end developer.
            Each project showcases my unique abilities and offers valuable
            insights and lessons that I can apply to future projects.
          </p>
        </div>
        {MiniProjectsData.map(
          ({
            summary,
            descriptionHeading,
            description,
            newHeading,
            newDescription,
            challengesHeading,
            challengesDescription,
            linkSource,
            linkLive,
          }) => (
            <Details
              key={summary}
              summary={summary}
              descriptionHeading={descriptionHeading}
              description={description}
              newHeading={newHeading}
              newDescription={newDescription}
              challengesHeading={challengesHeading}
              challengesDescription={challengesDescription}
              linkSource={linkSource}
              linkLive={linkLive}
            />
          )
        )}
      </div>
      <BriefFooter />
    </>
  );
};

export default MiniProjects;
