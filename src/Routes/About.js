import Lottie from 'react-lottie';
import devAnimation from "../Lotties/developer.json";

function About() {


	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: devAnimation,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice"
		}
	};


	return (
		<>
			{/* <!-- About section--> */}
			<section className="pb-5">
				<div className="container mb-4 mb-md-5">
					<div className="row justify-content-md-center">
						<div className="col-12 col-md-10 col-xxl-8">
							<Lottie
								options={defaultOptions}
								height="auto" // Set height to auto for responsiveness
								width="100%" // Set width to 100% for responsiveness
							/>
						</div>
					</div>
				</div>
				<div className="container overflow-hidden">
					<div className="row gy-2 gy-md-0 justify-content-xxl-center">
						<div className="col-12 order-md-1 col-md-8 col-xxl-6">
							<div className="text-center text-md-start">
								<h2 className="display-3 fw-bold lh-1">Aryan Singh</h2>
								<p className="text-secondary fs-4 mb-2">Full Stack Developer</p>
								<hr className="w-25 mx-auto ms-md-0 mb-4 text-secondary" />
								<p>GitHubExplore is a web application that allows users to search for GitHub profiles and view detailed information about the selected profiles. It provides a simple and intuitive interface to explore GitHub users' details quickly.</p>
								<ul>
									<li>Search for GitHub profiles by username.</li>
									<li>Display detailed information about the selected GitHub profile</li>
									<li>Fully responsive and user-friendly interface for easy navigation</li>
								</ul>
							</div>
							<div className='text-center'>
								{/* <!-- Github --> */}
								<a
									className="btn text-white btn-floating m-1"
									style={{ backgroundColor: "#333333" }}
									href="https://github.com/mearyansingh"
									role="button"
									target='_blank'
									rel="noreferrer"
									aria-label="Github"
								>
									<i className="bi bi-github"></i>
								</a>
								{/* <!-- Linkedin --> */}
								<a
									className="btn text-white m-1"
									style={{ backgroundColor: "#0082ca" }}
									href="https://www.linkedin.com/in/iamaryansingh/"
									role="button"
									target='_blank'
									rel="noreferrer"
									aria-label="Linkedin"
								>
									<i className="bi bi-linkedin"></i>
								</a>
								{/* <!-- Twitter --> */}
								<a
									className="btn text-white m-1"
									style={{ backgroundColor: "#000" }}
									href="https://twitter.com/aryansingh_1810"
									target='_blank'
									rel="noreferrer"
									role="button"
									aria-label="twitter"
								>
									<i className="bi bi-twitter-x"></i>
								</a>
								{/* <!-- Instagram --> */}
								<a
									className="btn text-white m-1"
									style={{ backgroundColor: "#d62976" }}
									href="https://www.instagram.com/aryansingh.me/"
									role="button"
									target='_blank'
									rel="noreferrer"
									aria-label="Instagram"
								>
									<i className="bi bi-instagram"></i>
								</a>


							</div>
						</div>
						<div className="col-12 order-md-0 col-md-4 col-xxl-4">
							<div className="text-center text-md-start me-md-3 me-xl-5">
								<p className="mb-4">
									<span className="d-block display-6 lh-1">2+</span>
									<span className="fs-4 text-secondary">years of experience</span>
								</p>
								<div className="d-grid">
									<button className="btn btn-primary btn-lg" type="button">Portfolio</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default About