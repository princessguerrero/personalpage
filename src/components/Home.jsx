import React, { Component } from "react";
import BeachImg from "../images/coron.jpg";
import CroppedDeskImg from "../images/croppedDesk.jpg";
import ResizedDeskImg from "../images/resizedDesk.jpg";
import { Route, Link, Switch, Redirect } from "react-router-dom";


class Home extends Component {
  render() {
    return (
        <div className="home">
        <img src={ResizedDeskImg} alt="desk" className="deskImg" />

          <div className="text peachcolor bigtext">
            Princess Guerrero
          </div>
          <div className="text">Full Stack Web Developer</div>
          <button className="buttontext"><a href="https://docs.google.com/document/d/1FLpMkeUO3BfivEqiZMpgtBgrQ2D72SNRx1q36Qk2jkA/edit?usp=sharing">Resume</a></button>
        </div>
    );
  }
}

export default Home;
