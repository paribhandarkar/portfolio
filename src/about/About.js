import React from "react";
import "./About.css";
import BriefFooter from "../common components/BriefFooter";

const About = () => {
  return (
    <div className="main-about" id="main-about">
      <div className="about-header">
        <h1 className="main-heading">About me</h1>
        <div className="about-nav">
          <p>Navigation</p>
          <ol type="a">
            <li>
              <a href="#about-me" className="about-nav-links">
                about me
              </a>
            </li>
            <li>
              <a href="#tech-stack" className="about-nav-links">
                tech stack
              </a>
            </li>
            <li>
              <a href="#muse" className="about-nav-links">
                muse & motivation
              </a>
            </li>
            <li>
              <a href="#note-to-self" className="about-nav-links">
                notes to self
              </a>
            </li>
            <li>
              <a href="#maybe-some-day" className="about-nav-links">
                maybe some day
              </a>
            </li>
          </ol>
        </div>
      </div>
      <div className="about-why-cute" id="about-me">
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
        <p>
          As a developer with a background in design, I aim to have a
          human-centered approach. If there is anything I have learned, with our
          power as developers who are crafting people's experiences, we cannot
          afford not to be human-centric.{" "}
        </p>
        <p>
          I ultimately hope to put out work positively impacting people's lives
          and continue to be mindful of my designs.
        </p>
      </div>
      <div className="tech-stack" id="tech-stack">
        <div className="tech-stack-intro">
          <h6>Skills and Tools</h6>
          <div className="tech-stack-indicator">
            <div className="tech-stack-bar"></div>
            <div className="tech-stack-bar-text">
              <span>Occasionally</span>
              <span>Frequently Used</span>
            </div>
          </div>
        </div>
        <div className="tech-stack-lang">
          <h6 className="skill-field-main">Languages</h6>
          <div className="skill-field-area">
            <h5 className="skill-field">Front-End related</h5>
            <div className="skill-boxes">
              <span className="skilled-box">HTML</span>
              <span className="skilled-box">CSS</span>
              <span className="skilled-box">JavaScript</span>
            </div>
          </div>
          <div className="skill-field-area">
            <h5 className="skill-field">Back-End related</h5>
            <div className="skill-boxes">
              <span className="unskilled-box">PHP</span>
              <span className="skilled-box">Python</span>
            </div>
          </div>
          <h6 className="skill-field-main">Technologies</h6>
          <div className="skill-field-area">
            <h5 className="skill-field">UI related</h5>
            <div className="skill-boxes">
              <span className="unskilled-box">Bootsrap</span>
            </div>
          </div>
          <div className="skill-field-area">
            <h5 className="skill-field">Front-End related</h5>
            <div className="skill-boxes">
              <span className="unskilled-box">WordPress</span>
              <span className="skilled-box">React</span>
            </div>
          </div>
          <h6 className="skill-field-main">Tools & Softwares</h6>
          <div className="skill-field-area">
            <h5 className="skill-field">Code related</h5>
            <div className="skill-boxes">
              <span className="unskilled-box">Node.js</span>
              <span className="skilled-box">VS Code</span>
              <span className="skilled-box">Git</span>
            </div>
          </div>
          <div className="skill-field-area">
            <h5 className="skill-field">Design related</h5>
            <div className="skill-boxes">
              <span className="skilled-box">Canva</span>
              <span className="skilled-box">Figma</span>
              <span className="skilled-box">Adobe XD</span>
            </div>
          </div>
        </div>
      </div>
      <div className="about-free-time" id="muse">
        <p className="about-free-time-para p1">
          In addition to my passion for coding and front end development, I also
          love exploring my creativity in other areas of life. Whether I'm
          brainstorming design concepts for a new project, experimenting with a
          new recipe in the kitchen, or getting lost in a good book, I find that
          immersing myself in creative pursuits helps to keep my mind fresh and
          inspired.
        </p>
        <div className="about-free-time-img1"></div>
        <p className="about-free-time-para p2">
          In my free time, I'm also passionate about staying up-to-date on the
          latest trends and developments in design and technology. I enjoy
          reading articles and blog posts, watching videos, and attending
          conferences and meetups to learn from other professionals in the
          field. This constant learning and growth helps me to stay inspired and
          motivated, and allows me to bring fresh perspectives and ideas to my
          work as a front end developer.
        </p>
        <div className="about-cafe-hopping-div">
          <p className="about-cafe-hopping">
            One of my favorite ways to unwind and let my creativity flow is by
            café hopping around town. I love trying out different coffee shops
            and tea houses, soaking in the unique ambiance and enjoying a
            delicious beverage while I work on personal projects or simply
            people-watch. Whether I'm sipping a hot Caramel Macchiato or an iced
            Matcha Latte, I find that a change of scenery and a good drink can
            do wonders for my creativity and productivity.
          </p>
          <div className="about-free-time-img2"></div>
        </div>
      </div>
      <div className="notes-to-self" id="note-to-self">
        <p className="notes-heading">🤍 notes to self</p>
        <div className="notes-row">
          <div className="notes-point">
            <p>01.</p>
            <p>Get good on talking on the phone.</p>
          </div>
          <div className="notes-point">
            <p>02.</p>
            <p>
              Email the people you admire and tell them that. It’ll make their
              day. And it’ll make yours when they write you back
            </p>
          </div>
          <div className="notes-point">
            <p>03.</p>
            <p>You’ll never regret a workout.</p>
          </div>
        </div>
        <div className="notes-row">
          <div className="notes-point">
            <p>04.</p>
            <p>It doesn’t make you vain to dress well.</p>
          </div>
          <div className="notes-point">
            <p>05.</p>
            <p>Be the first to laugh. It’s not uncool. It’s fun.</p>
          </div>
          <div className="notes-point">
            <p>06.</p>
            <p>Learn to cook a few things really, really well.</p>
          </div>
        </div>
        <div className="notes-row">
          <div className="notes-point">
            <p>07.</p>
            <p>Everything will be different in six months.</p>
          </div>
          <div className="notes-point">
            <p>08.</p>
            <p>Gift time, not things.</p>
          </div>
          <div className="notes-point">
            <p>09.</p>
            <p>Call your grandparents more.</p>
          </div>
        </div>
      </div>
      <div className="maybe-some-day" id="maybe-some-day">
        <p className="maybe-heading">🤍 maybe some day...</p>
        <div className="maybe-div">
          <p className="maybe-para">
            I'll finally do these things.
            <ul className="maybe-list">
              <li>
                A podcast about helping people ask a hard question to someone
                near and dear.{" "}
              </li>
              <li>A research project on BTS’ discography.</li>
              <li>
                An essay on what's so special about the the political and social
                commentary in <em>Sairat</em>.{" "}
              </li>
              <li>Finally learn to play the piano and compose a song.</li>
            </ul>
          </p>
          <div className="maybe-image"></div>
        </div>
      </div>
      <p className="to-top"><a href="#main-about">Back to top</a></p>
      <BriefFooter />
    </div>
  );
};

export default About;
