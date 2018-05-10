import React, { Component } from "react";
import ExpressImg from "../images/express.png";
import CSS3 from "../images/CSS3_Logo.png";
import JSimg from "../images/javascripttransparent.png";
import Reactimg from "../images/reactsym.png";
import HTML5 from "../images/html5transparent.png";
import Nodeimg from "../images/nodejs-512.png";
import Gitlogo from "../images/gitlogo.png";
import Postgresimg from "../images/postgresqlblue.png";

class Skills extends Component {
  render() {
    return (
      <div>
        <div className="skillsTitle">Skills</div>
        <div className="skillsIcons">
          <div className="icon">
          <p>Javascript</p>
            <img src={JSimg} alt="JS image" width="8%" />
            
          </div>
          <div>
          <p>ReactJS</p>
            <img src={Reactimg} alt="ReactJS" width="8%" />
          
          </div>
          <div>
              <p>HTML5</p>
            <img src={HTML5} alt="HTML5" width="9%" />
          
          </div>
          <div>
              <p>CSS3</p>
            <img src={CSS3} alt="CSS3" width="6.4%" />
          </div>
        </div>

        <div className="skillsIcons">
          
            <img src={Nodeimg} alt="NodeJS" width="12%" />
          
          
            <img src={Gitlogo} alt="Github" width="8%" />
          
          
            <img src={Postgresimg} alt="postgreSQL" width="8%" />
          
        </div>
      </div>
    );
  }
}

export default Skills;
