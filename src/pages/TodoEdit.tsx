import React from "react";
import { useParams } from "react-router-dom";

function TodoEdit() {
  let { id } = useParams();

  return <h1>Edit Todo: {id}</h1>;
}

export default TodoEdit;
