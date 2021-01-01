import React, { Fragment, useEffect } from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import TodoCard from './TodoCard'
import { Link } from 'react-router-dom'
import { useApiTodos } from '../hooks/UseApiTodos'

function TodoList() {
	const { data, loading, error, getTodos } = useApiTodos()

	useEffect(() => {
		getTodos()
	}, [getTodos])

	if (loading) return <p>Loading...</p>
	if (error) return <p>Error!</p>

	return (
		<Fragment>
			<Row>
				<Col>
					<Button size="sm" className="mx-1" onClick={() => getTodos()}>
						Refresh
					</Button>

					<Button size="sm" className="mx-1" as={Link} to={`/todos/add/`}>
						Add
					</Button>
				</Col>
			</Row>

			<hr></hr>
			{data && data.map((t, k) => <TodoCard key={k} todo={t} />)}
		</Fragment>
	)
}

export default TodoList
