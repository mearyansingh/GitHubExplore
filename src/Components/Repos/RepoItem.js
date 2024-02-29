import PropTypes from 'prop-types'
import { Badge } from 'react-bootstrap'

function RepoItem({ repo, align }) {

	const {
		name,
		description,
		html_url,
		forks,
		open_issues,
		watchers_count,
		stargazers_count,
		created_at,
		default_branch,
		homepage
	} = repo


	return (
		<>
			<li className={`timeline-item  ${align}`}>
				<div className="timeline-body">
					<div className="timeline-meta">
						<div className="d-inline-flex flex-column px-2 py-1 text-success-emphasis bg-success-subtle border border-success-subtle rounded-2 text-md-end">
							<span>{new Date(created_at).toLocaleString()}</span>
						</div>
					</div>
					<div className="timeline-content timeline-indicator">
						<div className="card border-0 shadow">
							<div className="card-body p-xl-4">
								<div className="fs-5 mb-2">
									<a href={html_url} className="text-break text-decoration-none lh-1 icon-link icon-link-hover" target='_blank' rel="noreferrer">
										{name}
										<i className='bi bi-arrow-right ms-1'></i>
									</a>
								</div>
								<h6 className="card-subtitle text-secondary mb-2">Branch: {default_branch}</h6>
								<p className="card-text mb-0">{description}</p>
								{homepage && <span className="card-subtitle text-secondary mb-2 fs-7 ">Deployed version: <a href={homepage} className='text-decoration-none'>{homepage}</a></span>}
								<div className='mt-2 d-grid d-sm-flex gap-2 flex-wrap'>
									<Badge bg="dark-subtle" className='me-2'>
										<span className='d-inline-block d-sm-none me-2'>Watch</span>
										<i className='bi bi-eye me-2'></i>
										{watchers_count}
									</Badge>
									<Badge bg="success" className='me-2'>
										<span className='d-inline-block d-sm-none me-2'>Stars</span>
										<i className='bi bi-star me-2'></i>
										{stargazers_count}
									</Badge>
									<Badge bg="danger" className='me-2'>
										<span className='d-inline-block d-sm-none me-2'>Issues</span>
										<i className='bi bi-bug me-2'></i>
										{open_issues}
									</Badge>
									<Badge bg="warning" className='me-2'>
										<span className='d-inline-block d-sm-none me-2'>forks</span>
										<i className='bi bi-diagram-3 me-2'></i>
										{forks}
									</Badge>
								</div>
							</div>
						</div>
					</div>
				</div>
			</li>
		</>
	)
}

RepoItem.propTypes = {
	repo: PropTypes.object.isRequired,
}

export default RepoItem