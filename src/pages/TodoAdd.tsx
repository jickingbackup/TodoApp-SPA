import useAxios from 'axios-hooks'
import React, { Fragment, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { Todo } from '../common/Types'
import TodoForm from '../components/TodoForm'

function TodoAdd() {
	// api
	const [{ loading, error }, executePost] = useAxios(
		{
			url: `${process.env.REACT_APP_API_ROOT_URL}/todos/`,
			method: 'POST'
		},
		{ manual: true }
	)

	// Form submit
	const onSubmit = (todo: Todo) => {
		executePost({ data: todo }).then(() => setShowModal(true))
	}

	// Modal, Redirection
	let history = useHistory()
	const [showModal, setShowModal] = useState(false)
	const handleClose = () => {
		setShowModal(false)
		history.push('/todos')
	}

	if (loading) return <p>Loading...</p>
	if (error) return <p>Error!</p>

	return (
		<Fragment>
			<h1>Add Todo</h1>

			<TodoForm onSubmit={onSubmit} />

			<Modal show={showModal} onHide={handleClose} size="sm">
				<Modal.Header closeButton>
					<Modal.Title>Success</Modal.Title>
				</Modal.Header>
				<Modal.Body>Will redirect to todo list...</Modal.Body>
			</Modal>
		</Fragment>
	)
}

export default TodoAdd
