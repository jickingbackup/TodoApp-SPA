import React from "react";
import { useParams } from "react-router-dom";

function Todos() {
  let { id } = useParams();

  return <h1>Todos{id && `,Selected ${id}`}</h1>;
}

export default Todos;
