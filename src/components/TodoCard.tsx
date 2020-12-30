import React from "react";
import { Row, Col } from "react-bootstrap";

function Container({ children }) {
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>{children}</Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Container;
