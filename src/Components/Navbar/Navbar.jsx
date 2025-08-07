import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [setMenu] = React.useState("home");
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <ul className="nav-menu">
        <li>
          <AnchorLink href="#home" className="anchor-link">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#about" className="anchor-link">
            <p onClick={() => setMenu("about")}>About</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#projects" className="anchor-link">
            <p onClick={() => setMenu("projects")}>Projects</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#contact" className="anchor-link">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">Connect with me</div>
    </div>
  );
};

export default Navbar;
