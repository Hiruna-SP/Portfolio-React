import React from "react";
import "./Hero.css";
import profile from "../../assets/profile.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile} alt="Profile"  />
      <h1><span>I'm Hiruna Panditha,</span> <br/>Software Engineer Undergraduate.</h1>
      <p>
        Passionate about building innovative solutions and eager to contribute
        to impactful projects.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
