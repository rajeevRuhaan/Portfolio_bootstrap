import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import IntroIllustration from "../images/arts/intro-section-illustration.png";

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    from_last_name: "",
    to_name: "Rajeev",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    {
      /* --- METHOD TO SEND THE MAIL --- */
    }
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <section className="contact" id="contact">
      <Container>
        {/* contact descriptiom */}
        <Row className="text-center">
          <h1 className={`display-3 fw-bold text-capitalize pt-5`}>
            {" "}
            Get In-Touch
          </h1>
          <div className="heading-line"></div>
          <p>You can contact me by sending small text message.</p>
        </Row>
        {/* contact form */}
        <Row>
          {/* left column */}
          <Col lg={6} className={`bg-primary shadow p-3`}>
            <div className={`w-100 contact-info`}>
              <h1 className="text-center">
                Leave me a message and let's have chat!
              </h1>
              <img src={IntroIllustration} alt="intro illustration" />
            </div>
          </Col>
          {/* Right column */}
          <Col lg={6}>
            <div className="form w-100 pb-2">
              <h4 className="display-3--title text-center mb-5">
                Send text message
              </h4>
              <form action="#" onSubmit={onSubmit} className="row">
                <div className="col-lg-6 col-md-6 mb-3">
                  <input
                    value={toSend.from_name}
                    type="text"
                    placeholder="First Name"
                    id="firstname"
                    className="shadow form-control form-control-lg"
                  />
                </div>
                <div className="col-lg-6 col-md-6 mb-3">
                  <input
                    value={toSend.from_last_name}
                    type="text"
                    placeholder="Last Name"
                    id="lastname"
                    className="shadow form-control form-control-lg"
                  />
                </div>
                <div className="col-lg-12 mb-3">
                  <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    className="shadow form-control form-control-lg"
                  />
                </div>
                <div className="col-lg-12 mb-3">
                  <textarea
                    name="message"
                    id="message"
                    className="shadow form-control form-control-lg"
                    rows="8"
                    palceholder="Message"
                  ></textarea>
                </div>
                <div className="text-center d-grid mt-1">
                  <button
                    type="button"
                    className="btn btn-primary rounded-pill"
                    pt-3
                    pb-3
                  >
                    Submit
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
