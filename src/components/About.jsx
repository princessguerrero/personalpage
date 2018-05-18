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
            I am a web developer living in New York City. <br />
            Before diving into web development,  I was a stay-at-home
            mom. In trying to connect with my child I learned that he was not
            reaching his milestones. He had challenges other kids did not have.
            Because of that I became passionate about childhood development. I
            realized that if I learn how to code, not only will I have a career
            in tech but also be able to build products that are helpful for
            individuals in the Autism Spectrum and their caregivers.
          </div>
        </div>
      </div>
    );
  }
}

export default About;
