import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function Header({ title }) {

	return (
		<Navbar bg="dark" data-bs-theme="dark" className='sticky-top mb-12 shadow-lg flex-wrap'>
			<Container className='container'>
				<Navbar.Brand as={Link} to="/" className='d-flex align-items-center'><i className='bi bi-github inline me-2 fs-5 align-middle' />{title}</Navbar.Brand>
				<Nav className='d-flex gap-3 justify-end'>
					<Nav.Link as={Link} to="/">Home</Nav.Link>
					<Nav.Link as={Link} to="/about">About</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	)
}

Header.defaultProps = {
	title: 'GitHub Explorer',
}

Header.propTypes = {
	title: PropTypes.string,
}

export default Header