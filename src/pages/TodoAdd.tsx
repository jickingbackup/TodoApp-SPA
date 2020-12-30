import useAxios from "axios-hooks";
import React, { Fragment, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

function TodoAdd() {
  const [{ data, loading, error }, executePost] = useAxios(
    {
      url: `${process.env.REACT_APP_API_ROOT_URL}/todos/`,
      method: "POST",
    },
    { manual: true }
  );

  const { register, handleSubmit } = useForm(data);
  const onSubmit = (data) => {
    console.log(data);
    executePost({ data }).then(() => setShowModal(true));
  };

  let history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
    history.push("/todos");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <Fragment>
      <h1>Add Todo</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Description"
            name="description"
            ref={register}
          />
        </Form.Group>

        <Form.Group controlId="formCheckbox">
          <Form.Check
            type="checkbox"
            label="Done?"
            name="isClosed"
            ref={register}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <Modal show={showModal} onHide={handleClose} size="sm">
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>Will redirect to todo list...</Modal.Body>
      </Modal>
    </Fragment>
  );
}

export default TodoAdd;
