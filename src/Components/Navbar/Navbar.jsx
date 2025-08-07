import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menuicon from "../../assets/burger-menu.png";
import close from "../../assets/close.png";

const Navbar = () => {
  const [setMenu] = React.useState("home");
  const menuref = React.useRef();

  const openmenu = () => {
    menuref.current.style.right= "0";
  };
  const closemenu = () => {
    menuref.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <img src={menuicon} onClick={openmenu} alt="Menu Icon" className="nav-mob-open" />
      <ul ref={menuref} className="nav-menu">
        <img src={close} onClick={closemenu} alt="" className="nav-mob-close" />
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
      <div className="nav-connect">
        <AnchorLink href="#contact" className="anchor-link">
          Connect with me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
