import React, { Component } from "react";
import ExpressImg from "../images/express.png";
import CSS3 from "../images/CSS3_Logo.png";
import JSimg from "../images/javascripttransparent.png";
import Reactimg from "../images/reactsym.png";
import HTML5 from "../images/html5transparent.png";
import Nodeimg from "../images/nodejs-512.png";
import Gitlogo from "../images/gitlogo.png";
import Github from "../images/github.png";
import Postgresimg from "../images/postgresqlblue.png";

class Skills extends Component {
  render() {
    return (
      <div>
        <div className="skillsTitle">Skills</div>
        <div className="skillsIcons">
          <div className="eachIcon">
            <p className="iconText">Javascript</p>
            <img src={JSimg} alt="JS image" className="skillsimg" />
          </div>
          <div className="eachIcon">
            <p className="iconText">ReactJS</p>
            <img src={Reactimg} alt="ReactJS" className="skillsimg"/>
          </div>
          <div className="eachIcon">
            <p className="iconText">HTML5</p>
            <img src={HTML5} alt="HTML5" className="skillsimg" />
          </div>
          <div className="eachIcon">
            <p className="iconText">CSS3</p>
            <img src={CSS3} alt="CSS3" className="skillsimg" />
          </div>
          <div className="eachIcon">
            <p className="iconText">Node</p>
            <img src={Nodeimg} alt="NodeJS" className="skillsimg" />
          </div>
          <div className="eachIcon">
            <p className="iconText">Git</p>
            <img src={Gitlogo} alt="Git" className="skillsimg" />
          </div>
          <div className="eachIcon">
            <p className="iconText">Github</p>
            <img src={Github} alt="Github" className="skillsimg" />
          </div>
          <div className="eachIcon">
            <p className="iconText">PostgreSQL</p>
            <img src={Postgresimg} alt="postgreSQL" className="skillsimg" />
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
