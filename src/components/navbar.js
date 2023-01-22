import React from "react";
import "../components/navbar.css";
import { Link } from "react-scroll";
function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <Link
          className="header"
          activeClass="actives"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          RATHAN
        </Link>
        <ul className="nav-list">
          <li>
            <Link
              className="nav-link"
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <span className="nav-name">Home</span>
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <span className="nav-name">About</span>
            </Link>
          </li>

          <li>
            <Link
              className="nav-link"
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <span className="nav-name">Skills</span>
            </Link>
          </li>

          <li>
            <Link
              className="nav-link"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <span className="nav-name">Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
