import { useContext } from 'react'
import Loader from '../Layout/Loader'
import UserItem from './UserItem'
import GithubContext from '../../Context/Github/GithubContext'
import { Row } from 'react-bootstrap'

function UserResults() {

	const { users, loading } = useContext(GithubContext)

	return (
		<section className='mb-5'>
			{loading ?
				<Loader />
				:
				<Row className='g-4'>
					{users.map((user) => (
						<UserItem key={user.id} user={user} />
					))}
				</Row>
			}
		</section>
	)
}



export default UserResults