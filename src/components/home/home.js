import React from "react";
import "../home/home.css";
import ProPic from "../images/propic.png";
import { Link } from "react-scroll";

function Home() {
  return (
    <div className="home" id="home">
      <img className="proPic" src={ProPic} alt="ProfilePicture-png" />
      <div className="content">
        <div className="name">
          <h3>Hi,I'm</h3>
          <h1>RathanaKumar R</h1>
          <h2>Front-end Developer</h2>
        </div>
        <p className="parah">
          Learning HTML and CSS is a lot more challenging than it used to be.
          Responsive web design adds more layers of complexity to design and
          develop websites.
        </p>
        <a href="https://drive.google.com/file/d/1746OpgCRdzIZWXnLAJyFcF97do0KOfhO/view?usp=share_link">
          <button className="cv">Download CV</button>
        </a>
        <Link
          to="contact"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <button className="contacts">Contact Me</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
