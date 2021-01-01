import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
	return (
		<Navbar bg="dark" expand="lg" variant="dark">
			<Navbar.Brand as={Link} to={'/'}>
				{process.env.REACT_APP_NAME}
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link as={Link} to={'/todos'}>
						Todos
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}
export default Header
