import React, { Component } from "react";
import Githubimg from "../images/githubtransparent.png";

class GetInTouch extends Component {
  render() {
    return (
      <div>
        <div className="getInTouchTitle">Get In Touch</div>
        <div className="container">
          <div className="icon">
            <i class="far fa-3x fa-file-alt" />{" "}
          </div>
          <div className="icon">
            <i class="fab fa-3x fa-linkedin-in" />
          </div>
          <div className="icon">
            <i class="fab fa-3x fa-twitter" />
          </div>
          <div className="icon">
            <i class="fab fa-3x fa-github" />
          </div>
          <div className="icon">
            <i class="far fa-3x fa-envelope" />{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default GetInTouch;
