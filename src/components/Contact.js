import React, { useState } from "react";
import { send } from "emailjs-com";
import { Store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

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
    send("service_9o38sva", "template_2vam4li", toSend, "8fXU04wVxhAgl9FuM")
      .then((response) => {
        Store.addNotification({
          title: "Success",
          message: "Your message has been sent successfully",
          type: "success",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true,
          },
        });
        setToSend({
          from_name: "",
          from_last_name: "",
          to_name: "Rajeev",
          message: "",
          reply_to: "",
        });
      })
      .catch((err) => {
        Store.addNotification({
          title: "Error",
          message: "Failed to send message",
          type: "success",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true,
          },
        });
      });
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
                    name="from_name"
                    onChange={handleChange}
                    type="text"
                    placeholder="First Name"
                    id="firstname"
                    className="shadow form-control form-control-lg"
                  />
                </div>
                <div className="col-lg-6 col-md-6 mb-3">
                  <input
                    value={toSend.from_last_name}
                    name="from_last_name"
                    onChange={handleChange}
                    type="text"
                    placeholder="Last Name"
                    id="lastname"
                    className="shadow form-control form-control-lg"
                  />
                </div>
                <div className="col-lg-12 mb-3">
                  <input
                    value={toSend.reply_to}
                    name="reply_to"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email"
                    id="email"
                    className="shadow form-control form-control-lg"
                  />
                </div>
                <div className="col-lg-12 mb-3">
                  <textarea
                    value={toSend.message}
                    name="message"
                    onChange={handleChange}
                    id="message"
                    className="shadow form-control form-control-lg"
                    rows="8"
                    palceholder="Message"
                    maxLength={200}
                  ></textarea>
                </div>
                <div className="text-center d-grid mt-1">
                  <button
                    type="submit"
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
