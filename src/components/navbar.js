import React from "react";
import "../components/navbar.css";
import { Link } from "react-scroll";
function navbar() {
  return (
    <div>
      <nav className="navbar">
        <Link
          className="header "
          activeClass="active"
          to="/"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          RATHAN
        </Link>
        <ul className="nav-list">
          <li>
            <Link
              className="nav-link"
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <span className="nav-name">About</span>
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              activeClass="active"
              to="Skills"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <span className="nav-name">Skills</span>
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              activeClass="active"
              to="Projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <span className="nav-name">Projects</span>
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              activeClass="active"
              to="Contact"
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

export default navbar;
