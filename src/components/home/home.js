import React from "react";
import "../home/home.css";
import ProPic from "../images/propic.png";

function Home() {
  return (
    <div className="home" id="home">
      <img className="proPic" src={ProPic} alt="Profile Picture-png" />
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

        <button className="cv">Download CV</button>
        <button className="contacts" to="contact">
          Contact Me
        </button>
      </div>
    </div>
  );
}

export default Home;
