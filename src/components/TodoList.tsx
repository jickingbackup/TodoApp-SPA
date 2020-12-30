import useAxios from "axios-hooks";
import React, { Fragment, useEffect } from "react";
import { Button, Row, Col } from "react-bootstrap";
import TodoCard from "./TodoCard";
import { Link } from "react-router-dom";

function TodoList() {
  const [{ data, loading, error }, refetch] = useAxios(
    `${process.env.REACT_APP_API_ROOT_URL}/todos`
  );

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <Fragment>
      <Row>
        <Col>
          <Button size="sm" className="mx-1" onClick={() => refetch()}>
            Refresh
          </Button>

          <Button size="sm" className="mx-1" as={Link} to={`/todos/add/`}>
            Add
          </Button>
        </Col>
      </Row>

      <hr></hr>
      {data.map((t, k) => (
        <TodoCard key={k} todo={t} />
      ))}
    </Fragment>
  );
}

export default TodoList;
