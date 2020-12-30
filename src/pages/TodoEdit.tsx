import useAxios from "axios-hooks";
import React, { Fragment } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

function TodoEdit() {
  const { id } = useParams();
  const [{ data: getData, loading: getLoading, error: getError }] = useAxios(
    `${process.env.REACT_APP_API_ROOT_URL}/todos/${id}`
  );
  const { register, handleSubmit } = useForm(getData);
  const onSubmit = (data) => console.log(data);

  if (getLoading) return <p>Loading...</p>;
  if (getError) return <p>Error!</p>;

  return (
    <Fragment>
      <h1>Edit Todo</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Description"
            name="description"
            defaultValue={getData.description}
            ref={register}
          />
        </Form.Group>

        <Form.Group controlId="formCheckbox">
          <Form.Check
            type="checkbox"
            label="Done?"
            name="isClosed"
            defaultChecked={getData.isClosed}
            ref={register}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Fragment>
  );
}

export default TodoEdit;
