import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import TodoList from "../components/TodoList";

function Todos() {
  let { id } = useParams();

  return (
    <Fragment>
      <h1>Todos{id && `,Selected ${id}`}</h1>
      <div>
        <TodoList />
      </div>
    </Fragment>
  );
}

export default Todos;
