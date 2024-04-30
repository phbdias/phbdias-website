import "./Contact.css";
import { Col, Row } from "antd";

import bulleagle_contact from "../assets/bulleagle-contact.png";
import cv from "../assets/cv.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import mail from "../assets/mail.png";

function Contact() {
  return (
    <contact>
      <Row className="contact" id="contact">
        <Col className="contact-image-container">
          <img
            src={bulleagle_contact}
            alt={bulleagle_contact}
            className="contact-image"
          />
        </Col>
        <Col className="contact-container">
          <text className="contact-title">
            Interested in my top-notch services but not sure how to reach me?!
          </text>
          <Row style={{ justifyContent: "space-evenly" }}>
            <a
              href="https://linkedin.com/in/phbdias"
              target="_blank"
              rel="noreferrer"
            >
              <Col className="button blue-bg">
                <img src={linkedin} alt={linkedin} className="button-icon" />
                <text className="button-text blue">Visit my LinkedIn</text>
              </Col>
            </a>
            <a
              href="https://github.com/phbdias"
              target="_blank"
              rel="noreferrer"
            >
              <Col className="button pink-bg">
                <img src={github} alt={github} className="button-icon" />
                <text className="button-text pink">Visit my GitHub</text>
              </Col>
            </a>
          </Row>
          <Row
            style={{
              flexDirection: "row-reverse",
              justifyContent: "space-evenly",
            }}
          >
            <a href="/PauloDiasCV.pdf" target="_blank" rel="noreferrer">
              <Col className="button blue-bg">
                <img src={cv} alt={cv} className="button-icon" />
                <text className="button-text blue">Read my CV</text>
              </Col>
            </a>
            <a
              href="mailto:phbdias25@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <Col className="button pink-bg">
                <img src={mail} alt={mail} className="button-icon" />
                <text className="button-text pink">Send me an email</text>
              </Col>
            </a>
          </Row>
        </Col>
      </Row>
    </contact>
  );
}

export default Contact;
