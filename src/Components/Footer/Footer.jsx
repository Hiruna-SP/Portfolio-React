import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import user from "../../assets/user.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="top-left">
          <img src={logo} alt="" />
          <p>
            Software Engineering undergraduate passionate about building
            innovative and user-focused digital solutions.
          </p>
        </div>
        <div className="top-right">
          <div className="email-input">
            <img src={user} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="bottom-left">
          © 2025 Hiruna Panditha. All rights reserved.
        </p>
        <div className="bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
