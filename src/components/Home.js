import React from "react";
import {
  Container,
  Col,
  Row,
  Image,
  ProgressBar,
  Form,
  Button,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faTelegram,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faLightbulb,
  faImage,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      {/* home section start */}
      <section className="home py-5" id="home">
        <Container fluid="lg">
          <Row className="min-vh-100 align-items-center align-contetnt-center">
            <Col md="6" className="mt-5 mt-md-0">
              <div className="home-img text-center">
                <Image
                  src="/images/profile.jpg"
                  width="500px"
                  alt="profile img"
                  className="mw-100"
                  roundedCircle
                />
              </div>
            </Col>
            <Col md="6" className="order-md-first mt-5 mt-md-0">
              <div className="home-text">
                <p className="text-muted mb-1">Hello I'm</p>
                <p className="text-danger text-uppercase fs-1 fw-bold">
                  farid hashemian
                </p>
                <p className="fs-5">
                  I'm <span className="fs-3 fw-bold"> web Developer</span>
                </p>

                <p className="mt-4 text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate, nobis!
                </p>
                <a href="#portfolio" className="btn btn-danger px-3 mt-3">
                  my Work
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* home section end */}

      {/* about section start */}

      <section className="about" id="about">
        <Container fluid="lg" className="py-4">
          <Row className="justify-content-center text-center">
            <Col lg="8">
              <div className="section-title">
                <h2 className="fw-bold mb-5">About Me</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <div className="about-text">
                <h3 className="fs-4 mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </h3>
                <p className="text-muted">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit nemo consequatur corporis! Natus voluptatem
                  suscipit ea atque assumenda aliquam pariatur recusandae dicta
                  molestiae? Eius velit culpa deserunt quis quia similique?
                </p>
              </div>
              <Row className="text-center text-uppercase my-3">
                <Col sm="4">
                  <div className="fact-item">
                    <h4 className="fs-1 fw-bold">100</h4>
                    <p className="text-muted">Projects Compeleted</p>
                  </div>
                </Col>
                <Col sm="4">
                  <div className="fact-item">
                    <h4 className="fs-1 fw-bold">90</h4>
                    <p className="text-muted">Happy Client</p>
                  </div>
                </Col>
                <Col sm="4">
                  <div className="fact-item">
                    <h4 className="fs-1 fw-bold">95</h4>
                    <p className="text-muted">Posetive Reviews</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col
                  lg="12"
                  className="d-flex align-items-center justify-content-center"
                >
                  <a href="/#" className="btn btn-danger px-3 me-5">
                    Download CV
                  </a>
                  <div className="social-links  ">
                    <a href="/#" className="text-dark me-2 mx-4">
                      <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a
                      href="https://t.me/faridhash"
                      className="text-dark me-2 mx-3"
                    >
                      <FontAwesomeIcon icon={faTelegram} size="2x" />
                    </a>
                    <a href="/#" className="text-dark me-2 mx-4">
                      <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                    </a>
                    <a href="/#" className="text-dark me-2 mx-4">
                      <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md="6" className="mt-5 mt-md-0">
              <div className="skill-item mb-4">
                <h3 className="fs-6">Html</h3>
                <ProgressBar
                  now={100}
                  variant="danger"
                  style={{ height: "10px" }}
                />
              </div>
              <div className="skill-item mb-4">
                <h3 className="fs-6">Css</h3>
                <ProgressBar
                  now={90}
                  variant="danger"
                  style={{ height: "10px" }}
                />
              </div>
              <div className="skill-item mb-4">
                <h3 className="fs-6">Javascript</h3>
                <ProgressBar
                  now={70}
                  variant="danger"
                  style={{ height: "10px" }}
                />
              </div>
              <div className="skill-item mb-4">
                <h3 className="fs-6">React</h3>
                <ProgressBar
                  now={70}
                  variant="danger"
                  style={{ height: "10px" }}
                />
              </div>
              <div className="skill-item mb-4">
                <h3 className="fs-6">Django</h3>
                <ProgressBar
                  now={50}
                  variant="danger"
                  style={{ height: "10px" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* about section end  */}
      {/* sevice section start */}
      <section className="services py-5" id="services">
        <Container fluid="lg" className="py-4">
          <Row className="justify-content-center text-center">
            <Col lg="8">
              <div className="section-title">
                <h2 className="fw-bold mb-5">What I Do</h2>
              </div>
            </Col>
          </Row>
          <Row className="text-center">
            <Col md="6" lg="4" className="mb-4">
              <div className="service-item shadow-sm p-4 rounded">
                <div className="icon my-3 text-danger fs-2">
                  <FontAwesomeIcon icon={faCode} />
                </div>
                <h3 className="fs-5 py-2">Web Development</h3>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Veniam, ut.
                </p>
              </div>
            </Col>
            <Col md="6" lg="4" className="mb-4">
              <div className="service-item shadow-sm p-4 rounded">
                <div className="icon my-3 text-danger fs-2">
                  <FontAwesomeIcon icon={faLightbulb} />
                </div>
                <h3 className="fs-5 py-2">Creative Design</h3>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Veniam, ut.
                </p>
              </div>
            </Col>
            <Col md="6" lg="4" className="mb-4">
              <div className="service-item shadow-sm p-4 rounded">
                <div className="icon my-3 text-danger fs-2">
                  <FontAwesomeIcon icon={faImage} />
                </div>
                <h3 className="fs-5 py-2">Photoshop</h3>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Veniam, ut.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* sevice section end */}

      {/* portfolio start */}
      <section id="portfolio" className="portfolio py-5">
        <Container fluid="lg" className="py-4">
          <Row className="justify-content-center text-center">
            <Col lg="8">
              <div className="section-title">
                <h2 className="fw-bold mb-5">Latest Works</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="6" lg="4">
              <div className="profolio-item text-center">
                <Image
                  src="/images/proshop.png"
                  className="w-100"
                  thumbnail
                  alt="Proshop "
                />
                <h3 className="text-capitalize fs-5 my-2">Proshop Mern</h3>
                <p className="mb-4">
                  <a href="/#" className="text-danger text-decoration-none ">
                    Live Demo
                  </a>
                </p>
              </div>
            </Col>
            <Col md="6" lg="4">
              <div className="profolio-item text-center">
                <Image
                  src="/images/proshop.png"
                  className="w-100"
                  thumbnail
                  alt="Proshop "
                />
                <h3 className="text-capitalize fs-5 my-2">Proshop Mern</h3>
                <p className="mb-4">
                  <a href="/#" className="text-danger text-decoration-none">
                    Live Demo
                  </a>
                </p>
              </div>
            </Col>
            <Col md="6" lg="4">
              <div className="profolio-item text-center">
                <Image
                  src="/images/proshop.png"
                  className="w-100"
                  thumbnail
                  alt="Proshop "
                />
                <h3 className="text-capitalize fs-5 my-2">Proshop Mern</h3>
                <p className="mb-4">
                  <a href="/#" className="text-danger text-decoration-none">
                    Live Demo
                  </a>
                </p>
              </div>
            </Col>
            <Col md="6" lg="4">
              <div className="profolio-item text-center">
                <Image
                  src="/images/proshop.png"
                  className="w-100"
                  thumbnail
                  alt="Proshop "
                />
                <h3 className="text-capitalize fs-5 my-2">Proshop Mern</h3>
                <p className="mb-4">
                  <a href="/#" className="text-danger text-decoration-none">
                    Live Demo
                  </a>
                </p>
              </div>
            </Col>
            <Col md="6" lg="4">
              <div className="profolio-item text-center">
                <Image
                  src="/images/proshop.png"
                  className="w-100"
                  thumbnail
                  alt="Proshop "
                />
                <h3 className="text-capitalize fs-5 my-2">Proshop Mern</h3>
                <p className="mb-4">
                  <a href="/#" className="text-danger text-decoration-none">
                    Live Demo
                  </a>
                </p>
              </div>
            </Col>
            <Col md="6" lg="4">
              <div className="profolio-item text-center">
                <Image
                  src="/images/proshop.png"
                  className="w-100"
                  thumbnail
                  alt="Proshop "
                />
                <h3 className="text-capitalize fs-5 my-2">Proshop Mern</h3>
                <p className="mb-4">
                  <a href="/#" className="text-danger text-decoration-none">
                    Live Demo
                  </a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* portfolio end */}

      {/* freelancer avalable section start */}
      <section
        className="freelancer-avalable bg-danger py-5"
        id="freelancer-avalable"
      >
        <Container fluid="lg" className="py-4">
          <Row className="justify-content-center">
            <Col lg="8" className="text-center">
              <p className="text-light fs-5">Do you have any project ?</p>
              <h2 className="fs-1 text-white mb-4">
                I'm ready to work for Companies
              </h2>
              <a href="#contact" className="btn btn-outline-light">
                Hire Me
              </a>
            </Col>
          </Row>
        </Container>
      </section>
      {/* freelancer avalable section end */}
      {/* contact section start */}
      <section className="contact py-5" id="contact">
        <Container fluid="lg" className="">
          <Row className="justify-content-center text-center">
            <Col lg="8">
              <div className="section-title">
                <h2 className="fw-bold mb-5">Contact Me</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="5">
              <div className="content-item d-flex mb-3">
                <div className="icon fs-4 text-danger">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="text ms-3">
                  <h3 className="fs-5">Email</h3>
                  <p className="text-muted ">sfaridhr76@gmail.com</p>
                </div>
              </div>
              <div className="content-item d-flex mb-3">
                <div className="icon fs-4 text-danger">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className="text ms-3">
                  <h3 className="fs-5">Phone</h3>
                  <p className="text-muted ">+989108858899</p>
                </div>
              </div>
            </Col>
            <Col md="7">
              <div className="contact-form">
                <Form>
                  <Row>
                    <Col lg="6">
                      <Form.Control
                        type="text"
                        placeholder="your name"
                        size="lg"
                        className="fs-6 border-0 shadow-sm mb-4"
                      />
                    </Col>
                    <Col lg="6">
                      <Form.Control
                        type="email"
                        placeholder="your email"
                        size="lg"
                        className="fs-6 border-0 shadow-sm mb-4"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="12">
                      <Form.Control
                        type="text"
                        placeholder="Subject"
                        size="lg"
                        className="fs-6 border-0 shadow-sm mb-4"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="12">
                      <Form.Control
                        as="textarea"
                        placeholder="Your Message"
                        size="lg"
                        rows="5"
                        className="fs-6 border-0 shadow-sm mb-4"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="12">
                      <Button type="submit" variant="danger" className="px-3">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* contact section end */}

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </>
  );
};

export default Home;
