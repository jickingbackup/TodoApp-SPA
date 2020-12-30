import useAxios from "axios-hooks";
import React from "react";
import { Button } from "react-bootstrap";

function TodoList() {
  const [{ data, loading, error }, refetch] = useAxios(
    `${process.env.REACT_APP_API_ROOT_URL}/todos`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div>
      <Button size="sm" onClick={() => refetch()}>
        Refresh
      </Button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default TodoList;
