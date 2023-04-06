import React from "react";
import "./PortfolioDesc.css";
import portfolio from "./images/portfolio.svg";
import BriefFooter from "../../common components/BriefFooter";

const PortfolioDesc = () => {
  return (
    <div className="portfolio-desc-page">
      <img
        src={portfolio}
        alt="header-img"
        className="portfolio-desc-header-img"
      />
      <h4>Personal Portfolio</h4>
      <p>
        As someone who is passionate about computer science, I believe that
        incorporating my own unique perspective and aesthetic into my work is
        crucial. While traditional stereotypes of computer science might
        prioritize a masculine and utilitarian aesthetic, I see value in adding
        elements of femininity to my projects. This can include everything from
        the design of user interfaces to the code itself.
      </p>
      <p>
        While some might argue that incorporating feminine aesthetics is not
        "serious" or "professional" enough for the field of computer science, I
        believe that this attitude is outdated and limiting. By embracing a more
        diverse range of aesthetics and design elements, we can create projects
        that are not only visually engaging, but also more representative of the
        diverse individuals who use them.
      </p>
      <p>
        My portfolio project is a testament to my creativity, technical skill,
        and unique perspective as a front end developer. From the design of the
        user interface to the code itself, every element of the project reflects
        my own personal aesthetic and approach to web development.
      </p>
      <p>
        One of the key features of my portfolio is its feminine aesthetic. I
        have used a soft color palette, elegant typography, and engaging visual
        elements to create a website that is both visually appealing and
        intuitive to navigate. The overall effect is a sense of approachability
        and warmth that invites users to explore my work and get to know me as a
        developer.
      </p>
      <p>
        Under the hood, my portfolio is built with cutting-edge web technologies
        and techniques. I have used responsive design to ensure that the site
        looks great on all devices, and have optimized the code for fast load
        times and smooth performance. Additionally, I have incorporated
        interactive elements such as smooth transitions, animations, and hover
        effects to create a more engaging user experience.
      </p>
      <p>
        Beyond its technical and aesthetic merits, my portfolio is also a
        testament to my skills as a developer. I have used a variety of tools
        and frameworks, including HTML, CSS, JavaScript, and React, to create a
        website that is both functional and elegant. Additionally, I have paid
        close attention to the accessibility and usability of the site, ensuring
        that it is easy to navigate and use for users of all abilities.
      </p>
      <p>
        Overall, I am incredibly proud of my portfolio project. It showcases not
        only my technical skills and creativity, but also my unique perspective
        as a front end developer. Whether you are a potential employer or simply
        a fellow developer interested in my work, I believe that my portfolio is
        a great example of what I can bring to the table.
      </p>
      <BriefFooter />
    </div>
  );
};

export default PortfolioDesc;
