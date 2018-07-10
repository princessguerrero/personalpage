import React, { Component } from "react";
import Pjimg from "../images/pjimageorange.jpg";
import Pjimg1 from "../images/pjimageorange1.jpg";
import Pjimg2 from "../images/pjimageorange2.jpg";

class About extends Component {
  render() {
    return (
      <div>
        <div className="aboutTitle">About Me</div>
        <div className="piccontainer">
          <div>
            <img src={Pjimg} className="photo" />
          </div>
          <div>
            <img src={Pjimg1} className="photo" />
          </div>
          <div>
            <img src={Pjimg2} className="photo" />
          </div>
          <div className="centeredAbout">
            I am a web developer living in New York City and before diving into
            programming, I was a stay-at-home mom. Having a child with Autism, I
            became passionate about childhood development and decided to embark
            on a journey to learn how to code. I realized that with the skills I
            will gain not only will I have a career in tech, but also be able to
            build meaningful products that have real-world impact.
          </div>
        </div>
      </div>
    );
  }
}

export default About;
