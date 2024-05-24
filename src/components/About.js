import { Col, Row } from "antd";

import azores from "../assets/azores-flag.webp";
import benfica from "../assets/benfica-fans.webp";
import bulleagle_framed from "../assets/bulleagle-framed.png";
import happy_cows from "../assets/happy-cows.webp";
import mission from "../assets/mission.webp";
import snowboard from "../assets/snowboard.gif";
import welcome from "../assets/welcome.webp";

import "./About.css";

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
          <p className="text">
            Welcome <img src={welcome} alt={welcome} className="gif" /> aboard!
          </p>
          <p className="text">
            My name is Paulo Dias, and I'm on this mission{" "}
            <img src={mission} alt={mission} className="gif" /> of establishing
            Web3 as the new internet standard.
          </p>
          <p className="text">
            I come from the Azores{" "}
            <img src={azores} alt={azores} className="gif" /> , famously known
            as the Land of Happy Cows{" "}
            <img src={happy_cows} alt={happy_cows} className="gif" /> .
          </p>
          <p className="text">
            In my spare time, I'm into sports, especially football — I'm a huge
            Benfica fan <img src={benfica} alt={benfica} className="gif" /> .
            You might also catch me at the gym, running outdoors, or mountain
            surfing <img src={snowboard} alt={snowboard} className="gif" /> .
          </p>
        </div>
      </Col>
    </Row>
  );
}

export default About;
