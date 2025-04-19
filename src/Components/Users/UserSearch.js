import { useState, useContext } from 'react'
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap';
import Lottie from 'react-lottie';
import githubAnimation from "../../Lotties/github-animation.json";
import GithubContext from '../../Context/Github/GithubContext'
// import AlertContext from '../../Context/Alert/AlertContext'
import { searchUsers } from '../../Context/Github/GithubActions'
import { toast } from 'react-toastify';

function UserSearch() {

	/**Initial state */
	const [text, setText] = useState('')

	/**Context hook */
	const { users, dispatch } = useContext(GithubContext)

	const handleChange = (e) => setText(e.target.value)

	const handleSubmit = async (e) => {
		e.preventDefault()

		// Client-side validation
		if (!text.trim()) {
			toast.error('Please enter something')
			return;
		}

		dispatch({ type: 'SET_LOADING' });

		try {
			// Perform the actual search
			const usersResult = await searchUsers(text);
			// Update state with the results
			dispatch({ type: 'GET_USERS', payload: usersResult });
			setText('');
		} catch (error) {
			console.error('Error during form submission:', error);
			toast.error('Error during form submission:', error)
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
					<Col className='d-flex align-items-center' md={6}>
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