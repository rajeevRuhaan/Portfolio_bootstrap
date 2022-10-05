import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import Publication1 from "../images/publications/process-design.png";
import Publication2 from "../images/publications/mekong-river.png";

import Carousel from "react-bootstrap/Carousel";

const Publication = () => {
  return (
    <section id="publication" className="publication pt-5">
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,160L30,133.3C60,107,120,53,180,37.3C240,21,300,43,360,64C420,85,480,107,540,133.3C600,160,660,192,720,176C780,160,840,96,900,69.3C960,43,1020,53,1080,80C1140,107,1200,149,1260,154.7C1320,160,1380,128,1410,112L1440,96L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg> */}
      <Container>
        <Row>
          <div className={`display-3 text-center`}>
            <h1>Publications / Thesis Work</h1>
            <hr
              style={{ width: "20rem", height: "3rem" }}
              className={`mx-auto`}
            />
          </div>
        </Row>
        {/* Crousel start */}
        <Carousel autoPlay={false}>
          <Carousel.Item className="text-center">
            <div className=" text-center">
              <h3 className="text-white">
                Development and Optimization of Pilot Plant for Nutrient
                Recovery from Reject Water (2019)
              </h3>
              <a
                href="https://aaltodoc.aalto.fi/handle/123456789/37940"
                target="_blank"
                rel="noreferrer"
              >
                <Button>Link to read more</Button>
              </a>
            </div>
            <div className="publication__card">
              <img fluid src={Publication1} alt="publication one" />
            </div>
            <p className="text-white">
              This is my master thesis. The work was to develop laboratory scale
              rejectwater treatement process to pilot scale. The pilot designed
              capacity was 100 l/hr in continuous process.
            </p>
          </Carousel.Item>
          <Carousel.Item className="text-center">
            <div>
              <h3 className="text-white">
                Mekong Erosion, Hydropower Development and Sediment Trapping by
                the Reservoirs (2014)
              </h3>
              <a
                href="https://www.theseus.fi/handle/10024/69592"
                target="_blank"
                rel="noreferrer"
              >
                <Button>Link to read more</Button>
              </a>
            </div>
            <div className="publication__card">
              <img fluid src={Publication2} alt="publication one" />
            </div>
            <p className=" text-white">
              This is my bachelor thesis. The mathematical flood model was made
              to study erosion pattern at Mekong River, Vietnam because of the
              reservoir construction at upstream.
            </p>
          </Carousel.Item>
        </Carousel>
      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,160L30,133.3C60,107,120,53,180,37.3C240,21,300,43,360,64C420,85,480,107,540,133.3C600,160,660,192,720,176C780,160,840,96,900,69.3C960,43,1020,53,1080,80C1140,107,1200,149,1260,154.7C1320,160,1380,128,1410,112L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default Publication;
