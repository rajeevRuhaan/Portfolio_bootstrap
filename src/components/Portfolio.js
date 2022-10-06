import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Recipe from "../images/portfolio/Recipe1.png";
import Portfolio2 from "../images/portfolio/Nike-Sneaker.png";
import Portfolio3 from "../images/portfolio/List-Countries.png";
import Portfolio4 from "../images/portfolio/DevNet.png";

const Portfolio = () => {
  const datas = [
    {
      image: Recipe,
      projectName: "Recipe Book",
      githubLink: "https://github.com/rajeevRuhaan/homerecipe",
      serverLink: "https://happy-kilby-4009e8.netlify.app/",
    },
    {
      image: Portfolio2,
      projectName: "Nike-Sneaker",
      githubLink:
        "https://github.com/rajeevRuhaan/fs9_fullstack_ecommerce-page",
      serverLink: "https://nikesneakers2022.netlify.app/",
    },
    {
      image: Portfolio3,
      projectName: "Countries Info",
      githubLink: "https://github.com/rajeevRuhaan/list-countries",
      serverLink: "https://countrieslists.netlify.app/",
    },
    {
      image: Portfolio4,
      projectName: "DevNet",
      githubLink: "https://github.com/rajeevRuhaan/Social-App-Summer-BC",
      serverLink: "https://devnet-bc.herokuapp.com/",
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
                    src={data.image}
                    alt="portfolio project 1"
                    title="portfolio project picture"
                  />
                  <div className={`portfolio-info`}>
                    <div className={`caption`}>
                      <h4>{data.projectName}</h4>
                      <div className={`link`}>
                        <a
                          href={data.githubLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa-brands fa-square-github"></i>
                        </a>
                        <a
                          href={data.serverLink}
                          target="_blank"
                          rel="noreferrer"
                        >
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
