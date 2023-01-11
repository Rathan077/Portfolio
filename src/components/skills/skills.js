import React from "react";
import "../skills/skills.css";
import htmlImg from "../images/html-img.png";
import cssImg from "../images/css-img.png";
import JsImg from "../images/javascript-img.png";
import BsImg from "../images/bootstrap-img.png";
import ReactImg from "../images/react-img.png";
import NodejsImg from "../images/node-img.png";
function Skills() {
  return (
    <div className="skills" id="skills">
      <div class="container-skills">
        <div class="box">
          <div class="imgBx">
            <img className="image" src={htmlImg} alt="html-png" />
          </div>
          <div class="content1">
            <div>
              <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjoh6Pd1Lr8AhXE8DgGHSq7BkYQFnoECBYQAQ&url=https%3A%2F%2Fwww.w3schools.com%2Fhtml%2F&usg=AOvVaw0vItDRbv3KzO30MW1MRsJ1">
                <h2 className="topic">HTML 5</h2>
              </a>
              <p className="p-skills">
                The HyperText Markup Language or HTML is the standard markup
                language for documents designed to be displayed in a web
                browser.
              </p>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="imgBx">
            <img className="image" src={cssImg} alt="css-png" />
          </div>
          <div class="content1">
            <div>
              <a href="https://www.google.com/url?sa=t&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjl4OKt1br8AhWjcGwGHd2GASYQFnoECAoQAQ&url=https%3A%2F%2Fwww.w3schools.com%2Fcss%2F&usg=AOvVaw0Xtbw_GBAChsgvZNkPLVGb">
                <h2 className="topic">CSS 3</h2>
              </a>
              <p className="p-skills">
                Cascading Style Sheets (CSS) is a style sheet language used for
                describing the look and formatting of a document written in a
                markup ..
              </p>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="imgBx">
            <img className="image" src={JsImg} alt="javascript-png" />
          </div>
          <div class="content1">
            <div>
              <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwie4eTB1br8AhV-R2wGHR6qD8gQFnoECAwQAQ&url=https%3A%2F%2Fwww.w3schools.com%2Fjs%2F&usg=AOvVaw0InYy1JO9V7729n-hfV1ti">
                <h2 className="topic">JavaScript</h2>
              </a>
              <p className="p-skills">
                JavaScript is the Programming Language for the Web. JavaScript
                can update and change both HTML and CSS. JavaScript can
                calculate, manipulate and validate data.
              </p>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="imgBx">
            <img className="image" src={BsImg} alt="bootstrap-png" />
          </div>
          <div class="content1">
            <div>
              <a href="https://getbootstrap.com/">
                <h2 className="topic">Bootstrap</h2>
              </a>
              <p className="p-skills">
                Bootstrap is the most popular CSS Framework for developing
                responsive and mobile-first websites.
              </p>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="imgBx">
            <img className="image" src={ReactImg} alt="React-png" />
          </div>
          <div class="content1">
            <div>
              <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi12LLw1br8AhVlT2wGHS2iBLYQFnoECAoQAQ&url=https%3A%2F%2Freactjs.org%2F&usg=AOvVaw26YbpVhaFnAB4A6G8-4uAs">
                <h2 className="topic">React JS</h2>
              </a>
              <p className="p-skills">
                React is a declarative, efficient, and flexible JavaScript
                library for building user interfaces.
              </p>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="imgBx">
            <img className="image" src={NodejsImg} alt="React-png" />
          </div>
          <div class="content1">
            <div>
              <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwj64-j-1br8AhX_TmwGHbYDB98QFnoECAoQAQ&url=https%3A%2F%2Fnodejs.org%2F&usg=AOvVaw1tY2p-vJFWJmxWlq4sTxCn">
                <h2 className="topic">Node JS</h2>
              </a>
              <p className="p-skills">
                Node.js is an open source server environment; Node.js is free ;
                Node.js can generate dynamic page content; Node.js can create,
                open, read, write, delete, and ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
