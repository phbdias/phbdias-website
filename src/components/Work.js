import "./Work.css";
import { Col, Row } from "antd";

import bulleagle_work from "../assets/bulleagle-work.png";
import defyme from "../assets/defyme.png";
import nova_fct from "../assets/nova-fct.jpeg";
import step_nologo from "../assets/step+nologo.png";
import unipartner from "../assets/unipartner.png";

function Work() {
  return (
    <Row className="work" id="work">
      <Col className="work-image-container">
        <img src={bulleagle_work} alt={bulleagle_work} className="work-image" />
      </Col>
      <Row className="work-container">
        <Col className="work-specs work-col col-1">
          <img src={defyme} alt={defyme} className="work-logo" />
          <p className="work-text">Co-Founder & Blockchain Engineer</p>
          <p className="work-text">2020-Present</p>
        </Col>
        <Col className="work-specs work-col col-2">
          <img src={step_nologo} alt={step_nologo} className="work-logo" />
          <p className="work-text">Lead Blockchain Engineer</p>
          <p className="work-text">2023-2024</p>
        </Col>
        <Col className="work-specs work-col col-3">
          <img src={nova_fct} alt={nova_fct} className="work-logo" />
          <p className="work-text">Teaching Assistant</p>
          <p className="work-text">2017-2020</p>
        </Col>
        <Col className="work-specs work-col col-4">
          <img src={unipartner} alt={bulleagle_work} className="work-logo" />
          <p className="work-text">Associate Software Engineer</p>
          <p className="work-text">2017</p>
        </Col>
      </Row>
    </Row>
  );
}

export default Work;
