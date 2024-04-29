import "./Work.css";
import { Col, Row } from "antd";

import bulleagle_work from "../assets/bulleagle-work.png";
import defyme from "../assets/defyme.png";
import nova_fct from "../assets/nova-fct.jpeg";
import step_nologo from "../assets/step+nologo.png";
import unipartner from "../assets/unipartner.png";

function Work() {
  return (
    <Row className="work">
      <Col>
        <img src={bulleagle_work} alt={bulleagle_work} className="work-image" />
      </Col>
      <Col className="work-container">
        <Row className="work-row">
          <Col className="work-specs work-col">
            <img src={defyme} alt={defyme} className="work-logo" />
            <p className="work-text">Co-Founder & Blockchain Engineer</p>
            <p className="work-text">2020-Present</p>
          </Col>
          <Col className="work-col"/>
          <Col className="work-specs work-col">
            <img src={step_nologo} alt={step_nologo} className="work-logo" />
            <p className="work-text">Lead Blockchain Engineer</p>
            <p className="work-text">2023-2024</p>
          </Col>
          <Col className="work-col"/>
        </Row>
        <Row className="work-row">
          <Col className="work-col"/>
          <Col className="work-specs work-col">
            <img src={nova_fct} alt={nova_fct} className="work-logo" />
            <p className="work-text">Teaching Assistant</p>
            <p className="work-text">2017-2020</p>
          </Col>
          <Col className="work-col"/>
          <Col className="work-specs work-col">
            <img src={unipartner} alt={bulleagle_work} className="work-logo" />
            <p className="work-text">Associate Software Engineer</p>
            <p className="work-text">2017</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Work;
