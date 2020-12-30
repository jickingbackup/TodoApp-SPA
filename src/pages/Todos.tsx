import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import TodoList from "../components/TodoList";

function Todos() {
  return (
    <Fragment>
      <h1>Todos</h1>

      <hr />
      <TodoList />
    </Fragment>
  );
}

export default Todos;
