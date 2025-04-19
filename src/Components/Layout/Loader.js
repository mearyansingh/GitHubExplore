import Image from 'react-bootstrap/Image'
import spinner from '../../Assets/Images/spinner.gif'

function Loader() {

	return (
		<div className='text-center'>
			<Image
				fluid
				width={180}
				height={180}
				className='mx-auto'
				src={spinner}
				alt='Loading...'
			/>
		</div>
	)
}

export default Loader
