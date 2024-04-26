import "./App.css";
import { Col, Row } from "antd";

import azores from "./assets/azores-flag.webp";
import benfica from "./assets/benfica-fans.webp";
import bulleagle_framed from "./assets/bulleagle-framed.png";
import bulleagle_work from "./assets/bulleagle-work.png";
import bulleagle_contact from "./assets/bulleagle-contact.png";
import happy_cows from "./assets/happy-cows.webp";
import mission from "./assets/mission.webp";
import snowboard from "./assets/snowboard.gif";
import welcome from "./assets/welcome.webp";

function App() {
  return (
    <div className="App">
      <Row className="Header">
        <Col className="Header-title">
          <text className="Header-title">Paulo Dias</text>
        </Col>
        <Col className="Header-sectionBar">
          <text className="Header-text">About</text>
          <text className="Header-text">Work</text>
          <text className="Header-text">Contact</text>
        </Col>
      </Row>
      <section className="Section">
        <Row
          style={{
            flexDirection: "row-reverse",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Col>
            <img src={bulleagle_framed} className="About-image" />
          </Col>
          <Col>
            <div className="About-Container">
              <div>
                <text className="Text">Welcome</text>
                <img src={welcome} className="Gif" />
                <text className="Text">aboard!</text>
              </div>
              <div>
                <text className="Text">
                  My name is Paulo Dias and I'm on a mission
                </text>
                <img src={mission} className="Gif" />
                <text className="Text">
                  to establish Web3 as the new internet standard.
                </text>
              </div>
              <div>
                <text className="Text">I come from the Azores</text>
                <img src={azores} className="Gif" />
                <text className="Text">
                  , famously known as the Land of Happy Cows
                </text>
                <img src={happy_cows} className="Gif" />
                <text className="Text">.</text>
              </div>
              <div>
                <text className="Text">
                  In my spare time, I'm into sports, especially football — I'm a
                  huge Benfica fan
                </text>
                <img src={benfica} className="Gif" />
                <text className="Text">
                  . You might also catch me at the gym, running outdoors, or
                  mountain surfing
                </text>
                <img src={snowboard} className="Gif" />
                <text className="Text">.</text>
              </div>
            </div>
          </Col>
        </Row>
      </section>
      <section className="Section">
        <Row
          style={{
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Col style={{
            flexGrow: 1,
          }} >
            <img src={bulleagle_work} className="Work-image" />
          </Col>
          <Col className="About-Container">
            <text className="Text">
              Welcome aboard! My name is Paulo Dias and I'm on a mission to
              establish Web3 as the new internet standard. I came from the
              Azores, famously known as the Land of Happy Cows. In my spare
              time, I'm into sports, especially football — I'm a huge Benfica
              fan. You might also catch me at the gym, running outdoors, or
              mountain surfing.
            </text>
          </Col>
        </Row>
      </section>
      <section className="Section">
        <Row
          style={{
            flexDirection: "row-reverse",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Col>
            <img src={bulleagle_contact} className="Contact-image" />
          </Col>
          <Col className="About-Container">
            <text className="Text">
              Welcome aboard! My name is Paulo Dias and I'm on a mission to
              establish Web3 as the new internet standard. I came from the
              Azores, famously known as the Land of Happy Cows. In my spare
              time, I'm into sports, especially football — I'm a huge Benfica
              fan. You might also catch me at the gym, running outdoors, or
              mountain surfing.
            </text>
          </Col>
        </Row>
      </section>
    </div>
  );
}

export default App;
