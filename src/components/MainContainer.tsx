import React from "react";
import { Row, Col, Container } from "react-bootstrap";

function MainContainer({ children }) {
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col md={10}>{children}</Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default MainContainer;
