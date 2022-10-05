import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Recipe from "../images/portfolio/Recipe1.png";
import Portfolio2 from "../images/portfolio/portfolio-2.jpg";

const Portfolio = () => {
  const datas = [
    {
      image: Recipe,
      projectName: "Recipe Book",
      githubLink: "https://github.com/",
      serverLink: "https://getbootstrap.com/",
    },
    {
      image: Portfolio2,
      projectName: "first Project2",
      githubLink: "https://github.com/",
      serverLink: "https://getbootstrap.com/",
    },
    {
      image: Portfolio2,
      projectName: "first Project3",
      githubLink: "https://github.com/",
      serverLink: "https://getbootstrap.com/",
    },
  ];

  return (
    <section id="portfolio" className={`portfolio`}>
      <Container>
        <Row className={`text-center mt-5`}>
          <h1>Project Dispaly</h1>
          <div className={`heading-line mb-5`}></div>
          <p>All the projects were created for study purpose. </p>
        </Row>

        {/* Start portfolio Items */}
        <Row>
          {datas.map((data) => {
            return (
              <Col lg={4} md={6} key={data.projectName}>
                <div className={`portfolio-box shadow`}>
                  <img
                    className={`fluid`}
                    src={data.image}
                    alt="portfolio project 1"
                    title="portfolio project picture"
                  />
                  <div className={`portfolio-info`}>
                    <div className={`caption`}>
                      <h4>{data.projectName}</h4>
                      <div className={`link`}>
                        <a href={data.githubLink}>
                          <i className="fa-brands fa-square-github"></i>
                        </a>
                        <a href={data.serverLink}>
                          <i className="fa-solid fa-link"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
