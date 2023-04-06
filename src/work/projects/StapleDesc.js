import React from "react";
import YoutubeEmbed from "../../common components/YoutubeEmbed";
import Button from "../../common components/Button";
import "./StapleDesc.css";
import img1 from "../../about/images/image00007.jpeg";
import img2 from "../../about/images/image00024.jpeg";
import img3 from "../../about/images/image00027.jpeg";
import img4 from "../../about/images/image00037.jpeg";
import BriefFooter from "../../common components/BriefFooter";

const StapleDesc = () => {
  return (
    <>
      <div className="staple-desc-detailed">
        <YoutubeEmbed embedId="WD52sS8ecVQ" />
        <h2 id="staple-desc-detailed-heading">
          Staple - A web portal for farmers
        </h2>
        <Button
          link="https://github.com/paribhandarkar/project-rice"
          text="Source Code"
        />
        <div className="staple-brief-intro">
          <div>
            <h3>Role & Team:</h3>
            <p>
              As the sole UI/UX designer and front-end developer, I led a team
              with a back-end developer on "Staple," a web portal for farmers,
              conducting research, creating wireframes and prototypes, and
              delivering a functional portal with search and contact features.
            </p>
          </div>
          <div>
            <h3>Technology Used:</h3>
            <p>
              HTML, CSS, and JavaScript for front-end development, Figma for
              design and prototyping, PHP for server-side scripting, and MySQL
              for database management.
            </p>
          </div>
          <div>
            <h3>What I Did:</h3>
            <p>
              I developed the front-end, designed the UI, created wireframes,
              and conducted research. Worked with a back-end developer,
              delivering a user-friendly web portal for farmers to access
              medicinal rice info and cultivation guidance, with search
              functionality and database storage.
            </p>
          </div>
          <div>
            <h3>What I Delivered:</h3>
            <p>
              I delivered user flows, wireframes, prototypes, and a fully
              functional UI for the web-based portal for farmers. I also created
              a design system and conducted actual research by visiting lab
              centers and interacting with professionals and farmers.
            </p>
          </div>
        </div>
        <div className="staple-image-gallery">
          <img src={img1} alt="in the lab" />
          <img src={img2} alt="rice display" />
          <img src={img3} alt="farmers" />
          <img src={img4} alt="medicinal rice" />
        </div>
        <div className="staple-actual-desc">
          <p>
            During the research phase of the project, I visited the R.H.
            Richaria Lab Center in Raipur, Chhattisgarh with my father, who is a
            professor in IGKV. The objective of the research was to gather
            information about the medicinal rice varieties found in Chhattisgarh
            and their cultivation. Here's a breakdown of my research methodology
            and key learnings:
          </p>
          <div>
            <h3>Research Objectives:</h3>
            <ul>
              <li>
                To understand the different varieties of medicinal rice found in
                Chhattisgarh
              </li>
              <li>
                To learn about the cultivation process of these rice varieties
              </li>
              <li>
                To identify the key challenges faced by farmers in cultivating
                medicinal rice
              </li>
            </ul>
          </div>
          <div>
            <h3>Research Methodology:</h3>
            <ul>
              <li>
                Visited the Rice Museum: The museum had a collection of 23,000+
                rice varieties, including rare ones. I clicked pictures and
                talked to the lab attendant to gather information about the
                medicinal rice varieties.
              </li>
              <li>
                Visited the Rice Freezer: At the freezer, I learned about the
                storage of rice varieties and the preservation techniques used.
              </li>
              <li>
                Spoke with Professionals and Farmers: I spoke with IGKV
                scientists and farmers to understand their experiences with
                cultivating medicinal rice and the challenges they face.
              </li>
            </ul>
          </div>
          <div>
            <h3>Key Learnings:</h3>
            <ul>
              <li>
                Different Varieties of Medicinal Rice: I learned about the
                various medicinal rice varieties found in Chhattisgarh,
                including their properties, nutritional value, and medicinal
                benefits.
              </li>
              <li>
                Cultivation Process: I gained knowledge about the cultivation
                process of medicinal rice, including seed selection, land
                preparation, sowing, irrigation, and harvesting.
              </li>
              <li>
                Challenges Faced by Farmers: Through my conversations with
                farmers, I identified some of the key challenges they face in
                cultivating medicinal rice, such as lack of awareness,
                inadequate infrastructure, and pest management.
              </li>
            </ul>
          </div>
          <p>
            Overall, my research experience helped me understand the importance
            of medicinal rice and the challenges faced by farmers in cultivating
            them. I used this knowledge to design a portal that would make it
            easier for farmers to access information and resources about
            medicinal rice cultivation.
          </p>
        </div>
      </div>
      <BriefFooter />
    </>
  );
};

export default StapleDesc;
