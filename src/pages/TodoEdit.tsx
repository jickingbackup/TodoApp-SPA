import useAxios from "axios-hooks";
import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { Todo, TodosRouteParameters } from "../common/Types";
import TodoForm from "../components/TodoForm";

function TodoEdit() {
  const { id } = useParams<TodosRouteParameters>();
  const [
    { data: getData, loading: getLoading, error: getError },
  ] = useAxios<Todo>(`${process.env.REACT_APP_API_ROOT_URL}/todos/${id}`);

  // Form submit
  const onSubmit = (todo: Todo) => {
    console.log("onSubmit(todo)", todo);
    // Todo: execute put
    // executePut({ data: todo }).then(() => setShowModal(true));
  };

  if (getLoading) return <p>Loading...</p>;
  if (getError) return <p>Error!</p>;

  return (
    <Fragment>
      <h1>Edit Todo</h1>
      <TodoForm onSubmit={onSubmit} todo={getData} />
    </Fragment>
  );
}

export default TodoEdit;
