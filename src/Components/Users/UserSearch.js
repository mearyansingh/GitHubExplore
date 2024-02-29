import { useState, useContext } from 'react'
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap';
import Lottie from 'react-lottie';
import githubAnimation from "../../Lotties/github-animation.json";
import GithubContext from '../../Context/Github/GithubContext'
import AlertContext from '../../Context/Alert/AlertContext'
import { searchUsers } from '../../Context/Github/GithubActions'

function UserSearch() {

	/**Initial state */
	const [text, setText] = useState('')

	/**Context hook */
	const { users, dispatch } = useContext(GithubContext)
	const { setAlert } = useContext(AlertContext)

	const handleChange = (e) => setText(e.target.value)

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (text === '') {
			setAlert('Please enter something', 'error')
		} else {
			dispatch({ type: 'SET_LOADING' })
			const users = await searchUsers(text)
			dispatch({ type: 'GET_USERS', payload: users })
			setText('')
		}
	}

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: githubAnimation,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice"
		}
	};

	return (
		<>
			<section className='mb-5'>
				<Row className='g-0'>
					<Col md={6}>
						<Lottie
							options={defaultOptions}
							height="auto" // Set height to auto for responsiveness
							width="100%" // Set width to 100% for responsiveness
						/>
					</Col>
					<Col className='d-flex align-items-center align-content-center' md={6}>
						<Form onSubmit={handleSubmit} className='w-100'>
							<Card className='shadow-sm border-light-subtle'>
								<Card.Body className='h-100'>
									<Form.Label>Enter github profile which you want to search:</Form.Label>
									<InputGroup>
										<Form.Control
											type="text"
											placeholder="Search..."
											aria-label="Search github profile"
											value={text}
											onChange={handleChange}
										/>
										<Button
											variant="dark"
											type='submit'
										>
											Go
										</Button>
									</InputGroup>
									{users.length > 0 && (
										<Button
											variant="danger"
											className='d-block mx-auto mt-3'
											onClick={() => dispatch({ type: 'CLEAR_USERS' })}
										>
											Clear Results
										</Button>
									)}
								</Card.Body>
							</Card>
						</Form>
					</Col>
				</Row >
			</section>
		</>
	)
}

export default UserSearch