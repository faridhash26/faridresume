import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer border-top py-4">
      <Container fluid="lg">
        <Row>
          <Col lg="12">
            <p className="m-0 text-center text-muted">
              &copy; 2021 Farid Resume
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
