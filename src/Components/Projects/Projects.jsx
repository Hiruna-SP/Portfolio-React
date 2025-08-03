import React from "react";
import "./Projects.css";
import projects_data from "../../assets/projects_data";
import arrow from "../../assets/arrow.png";
import line from "../../assets/line.png";

const Projects = () => {
  return (
    <div>
      <div className="projects">
        <div className="project-title">
          <h1>Latest Projects</h1>
          <img src={line} alt="line" />
        </div>

        <div className="project-container">
          {projects_data.map((work, index) => {
            return <img key={index} src={work.p_img} alt="" />;
          })}
        </div>
        <div className="showmore">
          <p>Show More</p>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
