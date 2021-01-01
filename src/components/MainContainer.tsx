import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

type Props = {
	children: React.ReactNode
}

function MainContainer({ children }: Props) {
	return (
		<Container>
			<Row>
				<Col></Col>
				<Col md={10}>{children}</Col>
				<Col></Col>
			</Row>
		</Container>
	)
}

export default MainContainer
