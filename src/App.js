import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './Components/Layout/Footer'
import Alert from './Components/Layout/Alert'
import Home from './Routes/Home'
import About from './Routes/About'
import User from './Routes/User'
import NotFound from './Routes/NotFound'
import { GithubProvider } from './Context/Github/GithubContext'
import { AlertProvider } from './Context/Alert/AlertContext'
import Header from './Components/Layout/Header'

function App() {

	return (
		<GithubProvider>
			<AlertProvider>
				<Router>
					<div className='d-flex flex-column min-vh-100'>
						<Header />
						<main className='container flex-grow-1 py-3'>
							<Routes>
								<Route path='/' element={<><Alert /><Home /></>} />
								<Route path='/about' element={<About />} />
								<Route path='/user/:login' element={<User />} />
								<Route path='/notfound' element={<NotFound />} />
								<Route path='*' element={<NotFound />} />
							</Routes>
						</main>
						<Footer />
					</div>
				</Router>
			</AlertProvider>
		</GithubProvider>
	);
}

export default App;
