import { useMemo, useState } from "react";
import { Col, Modal, Row } from "antd";

import bulleagle_work from "../assets/bulleagle-work.png";
import defyme from "../assets/defyme.png";
import defyme_screens from "../assets/defyme-screens.png";
import di_fct from "../assets/di-fct.jpeg";
import nova_fct from "../assets/nova-fct.jpeg";
import presentation_unipartner from "../assets/presentation-unipartner.jpg";
import step_nologo from "../assets/step+nologo.png";
import stepchain_screens from "../assets/stepchain-screens.png";
import unipartner from "../assets/unipartner.png";

import "./Work.css";

const useHoverOrClick = () => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const openHandlers = useMemo(
    () => ({
      onMouseOver() {
        setHovered(true);
      },
      onMouseOut() {
        setHovered(false);
      },
      onClick() {
        setClicked(true);
      },
    }),
    [],
  );

  const closeHandlers = useMemo(
    () => ({
      onCancel() {
        setClicked(false);
      },
    }),
    [],
  );

  const exit = () => setClicked(false);

  return [
    { hovered, openHandlers },
    { clicked, closeHandlers, exit },
  ];
};

const JobCard = ({ hoverProps, index, src, title, years, children }) => {
  const { hovered, openHandlers } = hoverProps;

  return (
    <Col className={`work-specs work-col col-${index}`}>
      <img
        src={src}
        alt={src}
        className={`work-logo ${hovered ? "work-hovered" : ""}`}
        {...openHandlers}
      />
      <p
        className={`work-text ${hovered ? "work-hovered" : ""}`}
        {...openHandlers}
      >
        {title}
      </p>
      <p
        className={`work-text ${hovered ? "work-hovered" : ""}`}
        {...openHandlers}
      >
        {years}
      </p>
      {children}
    </Col>
  );
};

const JobModal = ({ clickProps, company, link, period, src, text, title }) => {
  const { clicked, closeHandlers, exit } = clickProps;

  return (
    <Modal
      open={clicked}
      centered
      classNames={{
        body: "modal-body",
        header: "modal-header",
      }}
      closeIcon={null}
      footer={null}
      className="modal"
      styles={{ content: { padding: 0, margin: 10 } }}
      width={700}
      {...closeHandlers}
    >
      <img src={src} alt={src} className="modal-image" />
      <div className="modal-content">
        <text className="modal-content-title">{title}</text>
        <div className="row-with-space-between">
          <text className="modal-content-subtitle">{company}</text>
          <text className="modal-content-subtitle">{period}</text>
        </div>
        {text.map((p) => (
          <p className="modal-content-text">{p}</p>
        ))}
      </div>
      <div className="footer">
        <a
          className="footer-button"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          <text className="footer-button-text">{company} Website</text>
        </a>
        <div className="footer-button" onClick={exit}>
          <text className="footer-button-text">Close</text>
        </div>
      </div>
    </Modal>
  );
};

const jobs = [
  {
    company: "NoLogo",
    imgSrc: stepchain_screens,
    link: "https://nologo.dev/",
    logoSrc: step_nologo,
    period: "January 2023 - April 2024",
    text: [
      "I led the development of both front-end and blockchain components for StepChain, a mobile app created in partnership with NoLogo.",
      "• Responsible for the Walk-to-Earn reward model and the referral system, both designed with Solidity",
      "• Developed the mobile app in React Native, based on Figma designs",
    ],
    title: "Lead Blockchain Engineer",
    years: "2023-2024",
  },
  {
    company: "DEFYME",
    imgSrc: defyme_screens,
    link: "https://defyme.io/",
    logoSrc: defyme,
    period: "June 2020 - Present",
    text: [
      "DEFYME is a social dApp where friends can DEFY each other by creating thrilling leagues based on football matches using tokens.",
      "• Co-founded the project and conducted front-end and blockchain developments in parallel",
      "• Recurring to React Native for Web library, I materialized DEFYME into a PWA for web use and a mobile app accessible on both iOS and Android platforms",
      "• Deployed Solidity smart contracts in distinct EVM-compatible chains",
      "• Investigated blockchain state-of-the-art, mastering multiple EIPs to leverage features like gasless transactions and upgradeability",
      "• Developed a tool to integrate DEFYME into Kiss my Score, producing a Web3 gateway for a Web2 project",
    ],
    title: "Co-Founder & Blockchain Engineer",
    years: "2020-Present",
  },
  {
    company: "NOVA FCT",
    imgSrc: di_fct,
    link: "https://www.fct.unl.pt/",
    logoSrc: nova_fct,
    period: "September 2017 - June 2020",
    text: [
      "My university selected me for multiple research scholarships, which led me to teach lab classes for five continuous semesters. Throughout that period, I taught three different subjects:",
      "• Algorithms and Data Structures",
      "• Introduction to Programming",
      "• Introduction to Databases",
    ],
    title: "Teaching Assistant",
    years: "2017-2020",
  },
  {
    company: "Unipartner",
    imgSrc: presentation_unipartner,
    link: "https://unipartner.com",
    logoSrc: unipartner,
    period: "March 2017 - August 2017",
    text: [
      "Curricular internship developing in JavaScript and React.",
      "• Completed 5+ projects",
      "• Finished with a final grade of 19 out of 20",
    ],
    title: "Associate Software Engineer",
    years: "2017",
  },
];

function Job({ index, job }) {
  const [hoverProps, clickProps] = useHoverOrClick();
  const { company, imgSrc, link, logoSrc, period, text, title, years } = job;
  return (
    <JobCard
      hoverProps={hoverProps}
      index={index + 1}
      src={logoSrc}
      title={title}
      years={years}
    >
      <JobModal
        clickProps={clickProps}
        company={company}
        link={link}
        period={period}
        src={imgSrc}
        text={text}
        title={title}
      />
    </JobCard>
  );
}

function Work() {
  return (
    <Row className="work" id="work">
      <Col className="work-image-container">
        <img src={bulleagle_work} alt={bulleagle_work} className="work-image" />
      </Col>
      <Row className="work-container">
        {jobs.map((job, index) => (
          <Job index={index} job={job} />
        ))}
      </Row>
    </Row>
  );
}

export default Work;
