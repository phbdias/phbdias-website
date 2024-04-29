import "./Work.css";
import { Col, Row } from "antd";

import bulleagle_work from "../assets/bulleagle-work.png";

function Work() {
  return (
    <Row className="work">
      <Col
        style={{
          flexGrow: 1,
        }}
      >
        <img src={bulleagle_work} alt={bulleagle_work} className="work-image" />
      </Col>
      <Col className="work-container">
        <text className="text">
          Welcome aboard! My name is Paulo Dias and I'm on a mission to
          establish Web3 as the new internet standard. I came from the Azores,
          famously known as the Land of Happy Cows. In my spare time, I'm into
          sports, especially football — I'm a huge Benfica fan. You might also
          catch me at the gym, running outdoors, or mountain surfing.
        </text>
      </Col>
    </Row>
  );
}

export default Work;
