import React from "react";
import "./About.css";
import profile from "../../assets/profile.jpg";
import line from "../../assets/line.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={line} alt="Profile" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile} alt="Profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hello! I'm Hiruna Panditha, a Software Engineer Undergraduate with
              a passion for creating innovative solutions. I thrive on
              challenges and enjoy collaborating with others to bring ideas to
              life. My journey in software development has equipped me with a
              diverse skill set, and I'm always eager to learn and grow.
            </p>
            <p>
              In my free time, I love exploring new technologies, contributing
              to open-source projects, and staying updated with the latest
              trends in the tech industry. I'm excited about the future of
              software development and look forward to making a positive impact
              through my work.
            </p>
          </div>
          <h1>Technologies</h1>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>React.js</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "55%" }} />
            </div>
            <div className="about-skill">
              <p>Python</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Java</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Flutter</p>
              <hr style={{ width: "40%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Technology using</p>
        </div>
      </div>
    </div>
  );
};

export default About;
