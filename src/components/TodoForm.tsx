import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Todo } from '../common/Types'

type Props = {
	todo?: Todo
	onSubmit: (todo: Todo) => void
}

function TodoForm({ todo, onSubmit }: Props) {
	const { register, handleSubmit } = useForm<Todo>({ defaultValues: todo })

	return (
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
			<Button variant="primary" type="submit" block>
				Submit
			</Button>
		</Form>
	)
}

export default TodoForm
