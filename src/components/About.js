import "./About.css";
import { Col, Row } from "antd";

import azores from "../assets/azores-flag.webp";
import benfica from "../assets/benfica-fans.webp";
import bulleagle_framed from "../assets/bulleagle-framed.png";
import happy_cows from "../assets/happy-cows.webp";
import mission from "../assets/mission.webp";
import snowboard from "../assets/snowboard.gif";
import welcome from "../assets/welcome.webp";

function About() {
  return (
    <Row className="about">
      <Col className="about-image-container">
        <img
          src={bulleagle_framed}
          alt={bulleagle_framed}
          className="about-image"
        />
      </Col>
      <Col>
        <div className="about-container">
          <div>
            <text className="text">Welcome</text>
            <img src={welcome} alt={welcome} className="gif" />
            <text className="text">aboard!{"\n\n"}</text>
          </div>
          <div>
            <text className="text">
              My name is Paulo Dias, and I'm on a mission
            </text>
            <img src={mission} alt={mission} className="gif" />
            <text className="text">
              to establish Web3 as the new internet standard.
            </text>
          </div>
          <div>
            <text className="text">I come from the Azores</text>
            <img src={azores} alt={azores} className="gif" />
            <text className="text">
              , famously known as the Land of Happy Cows
            </text>
            <img src={happy_cows} alt={happy_cows} className="gif" />
            <text className="text">.</text>
          </div>
          <div>
            <text className="text">
              In my spare time, I'm into sports, especially football — I'm a
              huge Benfica fan
            </text>
            <img src={benfica} alt={benfica} className="gif" />
            <text className="text">
              . You might also catch me at the gym, running outdoors, or
              mountain surfing
            </text>
            <img src={snowboard} alt={snowboard} className="gif" />
            <text className="text">.</text>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default About;
