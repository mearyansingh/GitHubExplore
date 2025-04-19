import PropTypes from 'prop-types'
import RepoItem from './RepoItem'

function RepoList({ repos }) {

	return (
		<>
			{/* <!-- Timeline --> */}
			<h2 className='mt-5 mb-0 pt-4 font-bold text-center'>
				Latest Repositories
			</h2>
			<section className="bsb-timeline-4 py-3 py-md-5 mb-5">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-10 col-md-12 col-xl-10 col-xxl-9">
							<ul className="timeline">
								{repos.map((repo, index) => (
									<RepoItem key={repo.id} repo={repo} align={index % 2 === 0 ? 'left' : 'right'} />
								))}
							</ul>
						</div>
					</div>
				</div>
			</section >
		</>
	)
}

RepoList.propTypes = {
	repos: PropTypes.array.isRequired,
}

export default RepoList