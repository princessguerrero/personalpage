import React, { Component } from "react";
import BeachImg from "../images/coron.jpg";
import CroppedDeskImg from "../images/croppedDesk.jpg";
import ResizedDeskImg from "../images/resizedDesk.jpg";
import { Route, Link, Switch, Redirect } from "react-router-dom";


class Home extends Component {
  render() {
    return (
      <div>
        <div>
        <img src={ResizedDeskImg} alt="desk" className="deskImg" />

          <div className="text peachcolor bigtext">
            Princess Guerrero
          </div>
          <div className="text">Full Stack Web Developer</div>
          <div className="buttontext"><button className="buttontext"><a href="/about" >Welcome</a></button></div>

        </div>
      </div>
    );
  }
}

export default Home;
