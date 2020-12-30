import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function TodoCard({ todo }) {
  let { id, description } = todo;

  return (
    <Card>
      <Card.Body>{description}</Card.Body>
      <Card.Footer>
        <Button
          variant="primary"
          size="sm"
          className="ms-1"
          as={Link}
          to={`/todos/edit/${id}`}
        >
          Edit
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default TodoCard;
