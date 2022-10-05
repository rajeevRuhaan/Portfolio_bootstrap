import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import IntroImage from "../images/arts/intro-section-illustration.png";

const Introduction = () => {
  return (
    <section className={`intro-section`} id="home">
      <Container>
        <Row className={`align-items-center text-white`}>
          <Col md={6} sm={12} className={`intros`}>
            <h1 className="display-2">
              <span className="display-2--intro">Hey! I'm Rajeev.</span>
              <span className="display-2--description lh-base">
                I am Full-stack developer. I design responsive web page and that
                is my responsibility. I involve in design and create the
                frontend while similtaneously designing, developing, and
                debuging databases and the software's backend.
              </span>
            </h1>
            <button type="button" className="rounded-pill btn-rounded">
              Get in Touch.
              <a href="#contact">
                <span>
                  {" "}
                  <i className="fas fa-arrow-right"></i>
                </span>
              </a>
            </button>
          </Col>
          <Col md={6} sm={12} className={`intros text-end`}>
            <img
              className={`img-fluid`}
              src={IntroImage}
              alt="intro illustration"
            />
          </Col>
        </Row>
      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,128L30,154.7C60,181,120,235,180,266.7C240,299,300,309,360,272C420,235,480,149,540,128C600,107,660,149,720,192C780,235,840,277,900,282.7C960,288,1020,256,1080,208C1140,160,1200,96,1260,80C1320,64,1380,96,1410,112L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default Introduction;
