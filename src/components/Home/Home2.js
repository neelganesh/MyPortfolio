import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              FEW <span className="purple"> WORDS </span> ABOUT <span className="purple"> ME </span> {" "}
              <span className="wave" role="img" aria-labelledby="wave">
                  🤓
                </span>
            </h1>
            <p className="home-about-body">
              Software developer with <span className="purple">5 years</span> experience in <span className="purple">java spring boot</span> based web applications along with strong experience in <span className="purple">amazon web services</span>. Experience in <span className="purple">databricks,snowflake and spark</span> for huge data handling applications. Worked with <span className="purple">dockerizing</span> application and deploying them in <span className="purple">AWS kubernetes</span>.

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              {/*<li className="social-icons">*/}
              {/*  <a*/}
              {/*    href="https://github.com/neelganesh"*/}
              {/*    target="_blank"*/}
              {/*    rel="noreferrer"*/}
              {/*    className="icon-colour  home-social-icons"*/}
              {/*  >*/}
              {/*    <AiFillGithub />*/}
              {/*  </a>*/}
              {/*</li>*/}
              <li className="social-icons">
                <a
                  href="https://twitter.com/kailuneel1995"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/neelganesh-somasekhar-859b82100/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/kailuneel/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
