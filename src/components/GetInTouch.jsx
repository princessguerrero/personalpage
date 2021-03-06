import React, { Component } from "react";
import Githubimg from "../images/githubtransparent.png";

class GetInTouch extends Component {
  render() {
    return (
      <div>
        <div className="getInTouchTitle">Get In Touch</div>
        <div className="container">
          <div className="icon">
            <a href="https://drive.google.com/file/d/1SRjEGOwBZGBXnlxV9T5OMMba1U7NDhBC/view?usp=sharing">
              <i class="far fa-3x fa-file-alt" />
            </a>
          </div>
          <div className="icon">
            <a
              href="https://www.linkedin.com/in/princess-guerrero/"
              target="_blank"
            >
              <i class="fab fa-3x fa-linkedin-in" />
            </a>
          </div>
          <div className="icon">
            <a href="https://twitter.com/princessg814" target="_blank">
              <i class="fab fa-3x fa-twitter" />
            </a>
          </div>
          <div className="icon">
            <a href="https://github.com/princessguerrero" target="_blank">
              <i class="fab fa-3x fa-github" />
            </a>
          </div>
          <div className="icon">
            <a href="mailto:princessguerrero@pursuit.org">
              <i class="far fa-3x fa-envelope" />
            </a>{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default GetInTouch;
