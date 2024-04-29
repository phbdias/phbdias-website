import "./App.css";
import { Col, Row } from "antd";

import About from "./components/About";
import Contact from "./components/Contact";
import Work from "./components/Work";

function App() {
  return (
    <div className="app">
      <Row className="header">
        <Col className="header-title">
          <text className="header-title">Paulo Dias</text>
        </Col>
        <Col className="header-sectionBar">
          <text className="header-text">About</text>
          <text className="header-text">Work</text>
          <text className="header-text">Contact</text>
        </Col>
      </Row>
      <About/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
