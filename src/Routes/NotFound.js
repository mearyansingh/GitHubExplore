import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

function NotFound() {

	return (
		<>
			{/* <!-- Error 404 --> */}
			<section className="py-3 py-md-5 min-vh-100 d-flex justify-content-center align-items-center">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="text-center">
								<h2 className="d-flex justify-content-center align-items-center gap-2 mb-4">
									<span className="display-1 fw-bold">4</span>
									<i className="bi bi-exclamation-circle-fill text-danger display-4"></i>
									<span className="display-1 fw-bold bsb-flip-h">4</span>
								</h2>
								<h3 className="h2 mb-2">Oops! You're lost.</h3>
								<p className="mb-5">The page you are looking for was not found.</p>
								<Button as={Link} size="lg" variant='dark' className="rounded-pill px-5 fs-6" to="/" role="button">Back to Home</Button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default NotFound