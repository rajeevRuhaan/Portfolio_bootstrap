import React from "react";
import Node from "../images/companies/node.png";
import Php from "../images/companies/php.png";
import ReactLogo from "../images/companies/react.png";
import Redux from "../images/companies/redux.png";
import Html from "../images/companies/html-css-js.png";
import Typescript from "../images/companies/typescript.png";
import Mongodb from "../images/companies/mongodb.png";
import Laravel from "../images/companies/laravel.png";
import Java from "../images/companies/java.png";
import Materialui from "../images/companies/materialui.png";
import Bootstrap from "../images/companies/bootstrap.png";
import Github from "../images/companies/github.png";
import Mysql from "../images/companies/mysql.png";
import Docker from "../images/companies/docker.png";
import Drupal from "../images/companies/drupal.png";

import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const Stacks = () => {
  const skills = [
    Html,
    ReactLogo,
    Redux,
    Typescript,
    Bootstrap,
    Materialui,
    Node,
    Php,
    Java,
    Laravel,
    Drupal,
    Mongodb,
    Mysql,
    Github,
    Docker,
  ];
  return (
    <>
      <section id="skills">
        <div className={`skills`}>
          <Container>
            <Row className={`text-center`}>
              <h4 className={`fw-bold`}>Technical Skills</h4>
              <div className={`heading-line mb-5`}></div>
            </Row>
          </Container>
        </div>
      </section>
      <section>
        <Container>
          <Row>
            {skills.map((skill) => {
              return (
                <Col lg={2} md={3} key={skill}>
                  <div className={`skills__logo-box shadow`}>
                    <Image fluid src={skill} alt={skill} />
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Stacks;
