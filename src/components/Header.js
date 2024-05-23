import { Col, Drawer, Row } from "antd";

import menu from "../assets/menu.png";
import { useState } from "react";

import "./Header.css";

function Header() {
  const [visible, setVisibility] = useState(false);

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
    setVisibility(false);
  };

  return (
    <Row className="header" id="about">
      <Col className="header-title">
        <text className="header-title">Paulo Dias</text>
      </Col>
      <Col className="header-sections">
        <text className="header-text" onClick={() => scrollTo("about")}>
          About
        </text>
        <text className="header-text" onClick={() => scrollTo("work")}>
          Work
        </text>
        <text className="header-text" onClick={() => scrollTo("contact")}>
          Contact
        </text>
      </Col>
      <img
        src={menu}
        alt={menu}
        className="header-menu-icon"
        onClick={toggleButton}
      />
      <Drawer
        autoFocus={false}
        closable={false}
        open={visible}
        onClose={toggleButton}
        placement="top"
        footer={null}
        height={250}
        style={{ backgroundColor: "#0C032F"}}
      >
        <Row>
          <text
            className="header-text text-centered margin-vertical"
            onClick={() => scrollTo("about")}
          >
            About
          </text>
        </Row>
        <Row>
          <text
            className="header-text text-centered margin-vertical"
            onClick={() => scrollTo("work")}
          >
            Work
          </text>
        </Row>
        <Row>
          <text
            className="header-text text-centered margin-vertical"
            onClick={() => scrollTo("contact")}
          >
            Contact
          </text>
        </Row>
      </Drawer>
    </Row>
  );
}

export default Header;
