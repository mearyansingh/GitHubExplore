import { useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import CountUp from 'react-countup';
import Spinner from '../Components/Layout/Loader'
import RepoList from '../Components/Repos/RepoList'
import GithubContext from '../Context/Github/GithubContext'
import { getUserAndRepos } from '../Context/Github/GithubActions'
import { Badge, Button, Card, Col, Container, Image, Row } from 'react-bootstrap'

function User() {

	/**Context hook */
	const { user, loading, repos, dispatch } = useContext(GithubContext)

	const params = useParams()

	/**Lifecycle method */
	useEffect(() => {
		dispatch({ type: 'SET_LOADING' })
		const getUserData = async () => {
			const userData = await getUserAndRepos(params.login)
			dispatch({ type: 'GET_USER_AND_REPOS', payload: userData })
		}

		getUserData()
	}, [dispatch, params.login])

	const {
		name,
		type,
		avatar_url,
		location,
		email,
		bio,
		blog,
		twitter_username,
		login,
		html_url,
		followers,
		following,
		public_repos,
		public_gists,
		hireable,
	} = user

	if (loading) {
		return <Spinner />
	}

	// NOTE: check for valid url to users website

	const websiteUrl = blog?.startsWith('http') ? blog : 'https://' + blog

	// NOTE: code here has been fixed so that stats no longer show scroll bar on
	// mobile / small devices
	// https://www.udemy.com/course/react-front-to-back-2022/learn/lecture/29768968#questions/16902278

	// NOTE: if you are having problems with the name and login showing at the top
	// of the image then you need the className='flex-grow-0' on the <p> tag
	// default styling on <p> in daisyUI now has flex-grow-1

	return (
		<>
			<div className='mb-3'>
				<Link to='/' className='icon-link icon-link-hover text-decoration-none fw-semibold lh-1 text-dark'>
					<i className="bi bi-arrow-left"></i>
					Back To Search
				</Link>
			</div>
			<Card className='overflow-hidden border-light-subtle shadow-sm mb-4'>
				<Card.Body className='p-0'>
					<Row className='g-0'>
						<Col lg={6}>
							<div className='position-relative h-100'>
								<Image fluid src={avatar_url} alt="Profile_img" className='object-fit-cover w-100 h-100' width={800} height={800} />
								<div className='position-absolute text-center start-0 end-0 bottom-0 bg-dark text-light bg-opacity-25 p-2'>
									<p className='fw-bold mb-0'>{name}</p>
									<p className='flex-grow-0 mb-0'>{login}</p>
								</div>
							</div>
						</Col>
						<Col lg={6}>
							<Card className='border-0 rounded-start-0 h-100'>
								<Card.Body>
									<div className='d-flex align-items-center gap-1'>
										<h1>
											{name}
										</h1>
										<Badge bg="success">{type}</Badge>
										{hireable && (
											<Badge bg="info">Hireable</Badge>
										)}
									</div>
									<p>{bio}</p>
									<div className="row gy-4">
										{location && (
											<Col md={6}>
												<div className="d-flex align-items-center">
													<div style={{ width: "50px", height: "50px" }} className="flex-shrink-0 fs-5 bg-primary-subtle text-primary rounded-2 d-flex align-items-center justify-content-center me-3">
														<i className="bi bi-geo-fill"></i>
													</div>
													<div className='flex-grow-1 text-break'>
														<span className="d-block lh-1 fw-semibold">Location</span>
														<p className="text-secondary m-0 fs-7">{location}</p>
													</div>
												</div>
											</Col>
										)}
										{blog && (
											<Col md={6}>
												<div className="d-flex align-items-center">
													<div style={{ width: "50px", height: "50px" }} className="flex-shrink-0 fs-5 bsb-w-50 bsb-h-50 bg-primary-subtle text-primary rounded-2 d-flex align-items-center justify-content-center me-3">
														<i className="bi bi-link-45deg"></i>
													</div>
													<div className='flex-grow-1 text-break'>
														<span className="d-block lh-1 fw-semibold">Website</span>
														<a className='text-decoration-none' href={websiteUrl} target='_blank' rel='noreferrer'>
															{websiteUrl}
														</a>
													</div>
												</div>
											</Col>
										)}
										{twitter_username && (
											<Col md={6}>
												<div className="d-flex align-items-center">
													<div style={{ width: "50px", height: "50px" }} className="flex-shrink-0 fs-5 bsb-w-50 bsb-h-50 bg-primary-subtle text-primary rounded-2 d-flex align-items-center justify-content-center me-3">
														<i className="bi bi-twitter-x"></i>
													</div>
													<div className='flex-grow-1 text-break'>
														<span className="d-block lh-1 fw-semibold">Twitter</span>
														<a
															href={`https://twitter.com/${twitter_username}`}
															target='_blank'
															rel='noreferrer'
															className='fs-7 text-decoration-none'
														>
															{twitter_username}
														</a>
													</div>
												</div>
											</Col>
										)}
										{email && (
											<Col md={6}>
												<div className="d-flex align-items-center">
													<div style={{ width: "50px", height: "50px" }} className="flex-shrink-0 fs-5 bsb-w-50 bsb-h-50 bg-primary-subtle text-primary rounded-2 d-flex align-items-center justify-content-center me-3">
														<i className="bi bi-envelope-at"></i>
													</div>
													<div className='flex-grow-1 text-break'>
														<span className="d-block lh-1 fw-semibold">Email</span>
														<a href="mailto:" className="fs-7 text-decoration-none">{email}</a>
													</div>
												</div>
											</Col>
										)}
									</div>
									<section className="py-4 py-md-5">
										<Container className="overflow-hidden">
											<Row className="gy-4 gy-md-5">
												<Col xs={6} lg={4} xl={3}>
													<div className="text-center">
														<div className="d-flex align-items-center justify-content-center bg-dark-subtle mb-3 mx-auto stats-circle">
															<i className="bi bi-people-fill fs-5"></i>
														</div>
														<CountUp className="display-6 fw-bold m-1" delay={0.9} end={followers} />
														<p className="text-secondary m-0">Followers</p>
													</div>
												</Col>
												<Col xs={6} lg={4} xl={3}>
													<div className="text-center">
														<div className="d-flex align-items-center justify-content-center bg-dark-subtle mb-3 mx-auto stats-circle">
															<i className="bi bi-people-fill fs-5"></i>
														</div>
														<CountUp className="display-6 fw-bold m-1" delay={0.9} end={following} />
														<p className="text-secondary m-0">Following</p>
													</div>
												</Col>
												<Col xs={6} lg={4} xl={3}>
													<div className="text-center">
														<div className="d-flex align-items-center justify-content-center bg-dark-subtle mb-3 mx-auto stats-circle">
															<i className="bi bi-file-earmark-code-fill fs-5"></i>
														</div>
														{/* <span className="display-6 fw-bold m-1">{public_repos}</span> */}
														<CountUp className="display-6 fw-bold m-1" delay={0.9} end={public_repos} />
														<p className="text-secondary m-0">Public Repos</p>
													</div>
												</Col>
												<Col xs={6} lg={4} xl={3}>
													<div className="text-center">
														<div className="d-flex align-items-center justify-content-center bg-dark-subtle mb-3 mx-auto stats-circle">
															<i className="bi bi-shop-window fs-5"></i>
														</div>
														<CountUp className="display-6 fw-bold m-1" delay={0.9} end={public_gists} />
														<p className="text-secondary m-0">Public Gists</p>
													</div>
												</Col>
											</Row>
										</Container>
									</section>
									<div className='d-flex justify-content-center mb-4'>
										<Button
											href={html_url}
											variant="link"
											target='_blank'
											rel='noreferrer'
											className='icon-link icon-link-hover text-decoration-none lh-1 p-0'
										>
											Visit Github Profile
											<i className="ms-1 bi bi-arrow-right"></i>
										</Button>
									</div>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Card.Body>
			</Card >
			<RepoList repos={repos} />
		</>
	)
}

export default User