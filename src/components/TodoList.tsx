import useAxios from "axios-hooks";
import React, { Fragment } from "react";
import { Button, Row, Col } from "react-bootstrap";
import TodoCard from "./TodoCard";

function TodoList() {
  const [{ data, loading, error }, refetch] = useAxios(
    `${process.env.REACT_APP_API_ROOT_URL}/todos`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <Fragment>
      <Row>
        <Col>
          <Button size="sm" className="mx-1" onClick={() => refetch()}>
            Refresh
          </Button>

          <Button size="sm" className="mx-1">
            Add
          </Button>
        </Col>
      </Row>

      <hr></hr>
      {data.map((t) => (
        <TodoCard todo={t} />
      ))}
    </Fragment>
  );
}

export default TodoList;
