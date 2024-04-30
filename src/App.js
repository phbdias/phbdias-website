import "./App.css";
import { Col, Row } from "antd";

import About from "./components/About";
import Contact from "./components/Contact";
import Work from "./components/Work";

function App() {
    const scrollTo = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({
            behavior: "smooth",
        });
    };

  return (
    <div className="app">
      <Row className="header" id="about">
        <Col className="header-title">
          <text className="header-title">Paulo Dias</text>
        </Col>
        <Col className="header-sectionBar">
          <text className="header-text" onClick={() => scrollTo('about')}>About</text>
          <text className="header-text" onClick={() => scrollTo('work')}>Work</text>
          <text className="header-text" onClick={() => scrollTo('contact')}>Contact</text>
        </Col>
      </Row>
      <About/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
