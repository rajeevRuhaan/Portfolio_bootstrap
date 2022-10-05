import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <section className="footer">
      <Container>
        <Row>
          <Col
            md={4}
            lg={4}
            className={`contact-box pt-1 d-md-block d-lg-flex d-flex`}
          >
            <div className="contact-box__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-phone-call"
                viewBox="0 0 24 24"
                stroke-width="1"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                <path d="M15 7a2 2 0 0 1 2 2" />
                <path d="M15 3a6 6 0 0 1 6 6" />
              </svg>
            </div>
            <div className="contact-box__info">
              <a href="tel:+358440378568" class="contact-box__info--title">
                +358 44 0378568
              </a>
            </div>
          </Col>
          <Col
            md={4}
            lg={4}
            className={`contact-box pt-1 d-md-block d-lg-flex d-flex`}
          >
            <div className="contact-box__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-mail-opened"
                viewBox="0 0 24 24"
                stroke-width="1"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="3 9 12 15 21 9 12 3 3 9" />
                <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
                <line x1="3" y1="19" x2="9" y2="13" />
                <line x1="15" y1="13" x2="21" y2="19" />
              </svg>
            </div>
            <div className="contact-box__info">
              <a
                href="mailto:urrajivin@hotmail.com"
                className="contact-box__info--title"
              >
                urrajivin@hotmail.com
              </a>
            </div>
          </Col>
          <Col
            md={4}
            lg={4}
            className={`contact-box pt-1 d-md-block d-lg-flex d-flex`}
          >
            <div className="contact-box__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-map-2"
                viewBox="0 0 24 24"
                stroke-width="1"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="18" y1="6" x2="18" y2="6.01" />
                <path d="M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5" />
                <polyline points="10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15" />
                <line x1="9" y1="4" x2="9" y2="17" />
                <line x1="15" y1="15" x2="15" y2="20" />
              </svg>
            </div>
            <div className="contact-box__info">
              <a
                href="https://www.google.com/maps/place/Suvelantie+14,+02760+Espoo/@60.2034575,24.667319,15z/data=!3m1!4b1!4m5!3m4!1s0x468df38f4997b247:0x689d91c4c52093d9!8m2!3d60.2034578!4d24.6760737"
                className="contact-box__info--title"
                target="_blank"
                rel="noreferrer"
              >
                Suvelantie 14, 02760 Espoo, Finland
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      {/* Start social media */}
      <div className="footer-sm">
        <Container>
          <Row className="py-4 text-center text-white">
            <Col lg={5} md={6} className="mb-4 mb-md-0">
              Connect with me on social media
            </Col>
            <Col lg={7} md={6}>
              <a
                href="https://www.facebook.com/profile.php?id=100007882245588"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://twitter.com/rajeevsju"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://github.com/rajeevRuhaan"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/rajeev-sah/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/rajeevs2/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </Col>
          </Row>
        </Container>
        {/*  Start the copy right info */}
        <div className="footer-bottom pt-5 pb-5">
          <Container>
            <Row className="text-center">
              <Col>
                <div className="footer-bottom__copyright">
                  &copy;Copyright 2021 <a href="#">Rajeev</a> | Created by{" "}
                  <a href="#">Rajeev Sah</a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default Footer;
