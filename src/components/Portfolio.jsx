import React, { Component } from "react";
import Featherspic from "../images/feathershome.png";
import GreenEbt from "../images/greenEbt.png";
import InstagramClone from "../images/instagramclone.png";
import PuzzleBox from "../images/puzzle-box-home.png";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <div className="portfolioTitle">Portfolio</div>
        <div className="projectscontainer">
          <div className="eachprojpicdiv">
            <div>
              <p className="centertitlebox">Feathers</p>
              <div className="middlebox">
                <a href="http://fab-feathers.herokuapp.com/" target="_blank">
                  Live
                </a>
                {"  "}
                <a
                  href="https://github.com/princessguerrero/capstone"
                  target="_blank"
                >
                  Github
                </a>
              </div>
            </div>
            <img src={Featherspic} className="projectpic" />
            <p className="bottomdesc">
              A travel buddy finder for women. We used a <br />
              matching algorithm to find compatible companions.
            </p>
            <p className="bottomstack">
              ReactJS, Express, HTML5, CSS3, <br />
              PostgreSQL
            </p>
          </div>
          <div className="eachprojpicdiv">
            <div>
              <p className="centertitlebox">PuzzleBox</p>
              <div className="middlebox">
                <a href="http://puzzlebox-app.herokuapp.com/" target="_blank">
                  Live
                </a>
                {"  "}
                <a
                  href="https://github.com/princessguerrero/PuzzleBox"
                  target="_blank"
                >
                  Github
                </a>
              </div>
            </div>
            <img src={PuzzleBox} className="projectpic" />
            <p className="bottomdesc">
              An online organizer for caregivers of children with special<br/>
              needs
            </p>
            <p className="bottomstack">
              ReactJS, Express, HTML5, CSS3, <br />
              PostgreSQL
            </p>
          </div>
          <div className="eachprojpicdiv">
            <div>
              <p className="centertitlebox">GreenEBT</p>
              <div className="middlebox">
                <a
                  href="https://github.com/princessguerrero/GreenEBT"
                  target="_blank"
                >
                  Github
                </a>
              </div>
            </div>
            <img src={GreenEbt} className="projectpic" />
            <p className="bottomdesc">
              A guide to New York City Farmers' Markets <br /> that accept EBT
              cards.
            </p>
            <p className="bottomstack">
              ReactJS, Express, HTML5, CSS3, <br />
              Google Maps, NYC Open Data
            </p>
          </div>
          <div className="eachprojpicdiv">
            <p className="centertitlebox">Insta-clone</p>
            <div className="middlebox">
              <a
                href="https://github.com/princessguerrero/insta-clone"
                target="_blank"
              >
                Github
              </a>
            </div>
            <img src={InstagramClone} className="projectpic" />
            <p className="bottomdesc">
              A clone of Instagram with user authentication, feed,
              <br /> follower/following functionality,{" "}
            </p>
            <p className="bottomstack">
              ReactJS, Express, HTML5, CSS3 <br />
              PostgreSQL
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
