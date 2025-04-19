import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Card, Col } from 'react-bootstrap'

function UserItem({ user: { login, avatar_url } }) {

	return (
		<Col md={4}>
			<Card className='shadow-sm border-light-subtle'>
				<Card.Img variant="top" src={avatar_url} alt='Profile_img' />
				<Card.Body className=''>
					<h2 className='card-title'>{login}</h2>
					<Link
						className='text-decoration-none icon-link icon-link-hover lh-1'
						to={`/user/${login}`}
					>
						Visit Profile
						<i className="bi bi-arrow-right"></i>
					</Link>
				</Card.Body>
			</Card>
		</Col>
	)
}

UserItem.propTypes = {
	user: PropTypes.object.isRequired,
}

export default UserItem