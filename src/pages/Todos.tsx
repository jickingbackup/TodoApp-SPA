import React, { Fragment } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import TodoList from "../components/TodoList";

function Todos() {
  let { id } = useParams();

  return (
    <Fragment>
      <Row className="mt-1">
        <Col>
          <h1>Todos{id && `,Selected ${id}`}</h1>
        </Col>
        <Col>
          <Button size="sm" className="float-right align-middle">
            Add
          </Button>
        </Col>
      </Row>
      <hr />
      <TodoList />
    </Fragment>
  );
}

export default Todos;
